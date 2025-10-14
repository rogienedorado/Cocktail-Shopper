import { html, render } from "lit-html";
import { SearchBar } from "./components/SearchBar.js";
import { ShoppingList } from "./components/ShoppingList.js";
import { QueryResult } from "./components/QueryResult.js";


const App = () => html`
  <div class="app-container">
    <h1 class="app-title">Cocktail Search</h1>
    ${SearchBar()}
    ${QueryResult()}
    ${ShoppingList()}

  </div>
`;

render(App(), document.querySelector("#app"));