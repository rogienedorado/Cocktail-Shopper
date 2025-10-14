import { html } from "lit-html";
import "../styles/styles.css";

export const ShoppingList = () => html`
  <section class="shopping-list"> 
      <h2>Shopping List</h2>
      <hr/>
        <ul>
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      <div class="print-button-container">
      <h3>Print</h3>
      </div>
    </section>
`;
