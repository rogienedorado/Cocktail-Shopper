import { html } from "lit-html";
import "../styles/query.css";

export const QueryResult = (cocktail, onAdd) => html`
  <div class="cocktail-item">
    <img
      src="${cocktail.strDrinkThumb || 'cocktail.png'}"
      alt="${cocktail.strDrink}"
      class="cocktail-thumbnail"
    />
    <div class="cocktail-info">
      <h3 class="cocktail-name">${cocktail.strDrink}</h3>
      <p class="cocktail-instructions">
        ${cocktail.strInstructions || "No instructions available."}
      </p>
      <button class="add-button" @click=${() => onAdd(cocktail)}>
        +
      </button>
    </div>
  </div>
`;
