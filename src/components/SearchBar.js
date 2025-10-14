import { html } from "lit-html";
import "../styles/styles.css";

export const SearchBar = () => html`
  <div class="search-bar">
    <input type="text" class="search-input" placeholder="Search..." />
    <button class="search-button">Search</button>
  </div>
`;
