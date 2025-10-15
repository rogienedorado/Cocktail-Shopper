import { html } from "lit-html";
import "../styles/styles.css";

export const ShoppingList = (items = [], onRemove) => html`
  <section class="shopping-list">
    <h2>Shopping List</h2>
    <hr />

    <ul>
      ${items.length
        ? items.map(
            (item) => html`
              <li>
                ${item}
                <button class="remove-button" @click=${() => onRemove(item)}>×</button>
              </li>
            `
          )
        : html`<li>No ingredients yet.</li>`}
    </ul>

    <div class="print-button-container">
      <button class="print-button" @click=${() => window.print()}>Print</button>
    </div>
  </section>
`;
