import { html } from "lit-html";
import { showToast, hideToast } from "./Toaster.js";
import "../styles/styles.css";

export const SearchBar = (searchFn) => {
  let queryText = "";
  let typingTimeout = null;

  function onType(e) {
    queryText = e.target.value;

    if (queryText.trim() !== "") {
      showToast("Searching...", true);
    } else {
      hideToast();
    }

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => hideToast(), 2000);
  }

  function onSearch() {
    if (queryText.trim() === "") {
      showToast("Please enter something to search.");
      return;
    }

    hideToast();
    showToast("Searching...");
    searchFn(queryText);
  }

  function onKeyPress(e) {
    if (e.key === "Enter") onSearch();
  }

  return html`
    <div class="search-bar">
      <input
        type="text"
        class="search-input"
        placeholder="Search for a cocktail..."
        @input=${onType}
        @keydown=${onKeyPress}
      />
      <button class="search-button" @click=${onSearch}>Search</button>
    </div>
  `;
};
