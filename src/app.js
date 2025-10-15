import { html, render } from "lit-html";
import { SearchBar } from "./components/SearchBar.js";
import { ShoppingList } from "./components/ShoppingList.js";
import { QueryResult } from "./components/QueryResult.js";
import { Toaster, showToast } from "./components/Toaster.js";
import { initPion, sendUpdate } from "./PionConnection.js";
import "./styles/styles.css";

let cocktails = [];
let shoppingList = new Set();
let currentPage = 0;

initPion(handleRemoteMessage);

function handleRemoteMessage(message) {
  if (message.type === "addItem") {
    shoppingList.add(message.item);
    renderApp();
  } else if (message.type === "removeItem") {
    shoppingList.delete(message.item);
    renderApp();
  }
}

async function getCocktails(query = "margarita") {
  try {
    showToast("Searching...");

    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    cocktails = data.drinks || [];
    currentPage = 0;

    if (cocktails.length) {
      showToast("Here are the results.");
    } else {
      showToast("No results found.");
    }

    renderApp();
  } catch (err) {
    console.error("Error fetching cocktails:", err);
    showToast("Failed to fetch cocktails.");
  }
}

function getIngredients(cocktail) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) ingredients.push(ingredient);
  }
  return ingredients;
}

function addToShoppingList(cocktail) {
  const ingredients = getIngredients(cocktail);
  let newItems = 0;

  ingredients.forEach((item) => {
    if (!shoppingList.has(item)) {
      shoppingList.add(item);
      newItems++;
      // 🔁 Send real-time update through Pion
      sendUpdate({ type: "addItem", item });
    }
  });

  if (newItems > 0) {
    showToast(`${newItems} new ingredient${newItems > 1 ? "s" : ""} added.`);
  } else {
    showToast("All ingredients already added.");
  }

  renderApp();
}

function removeFromShoppingList(item) {
  if (shoppingList.delete(item)) {
    // 🔁 Send real-time update through Pion
    sendUpdate({ type: "removeItem", item });
    showToast("Ingredient removed.");
    renderApp();
  }
}


function nextPage() {
  if ((currentPage + 1) * 3 < cocktails.length) {
    currentPage++;
    renderApp();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderApp();
  }
}

function App() {
  const start = currentPage * 3;
  const visibleCocktails = cocktails.slice(start, start + 3);

  return html`
    <div class="app-container">
      <h1 class="app-title">Cocktail Search</h1>

      ${SearchBar(getCocktails)}

      <div class="results-container">
        ${cocktails.length
          ? html`
              ${visibleCocktails.map((c) => QueryResult(c, addToShoppingList))}

              <div class="pagination-buttons">
                ${currentPage > 0
                  ? html`<button class="prev-button" @click=${prevPage}>← Prev</button>`
                  : ""}
                ${(currentPage + 1) * 3 < cocktails.length
                  ? html`<button class="next-button" @click=${nextPage}>Next →</button>`
                  : ""}
              </div>
            `
          : html`<p>No results found.</p>`}
      </div>

      ${ShoppingList([...shoppingList], removeFromShoppingList)}
    </div>
  `;
}

function renderApp() {
  render(App(), document.querySelector("#app"));
}

getCocktails();
