import { html } from "lit-html";
import "../styles/query.css";

export const QueryResult = () => html`
  <div class="cocktail-item">
    <img
      src="cocktail.png"
      alt=""
      class="cocktail"
    />
    <div class="cocktail-info">
      <h3 class="cocktail-name">Cocktail Sample</h3>
      <p class="cocktail-instructions">Instruction</p>
      <button class="add-button">
        +
      </button>
    </div>
  </div>
`;