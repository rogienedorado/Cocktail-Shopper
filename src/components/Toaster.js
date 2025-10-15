import { html, render } from "lit-html";
import "../styles/toaster.css";

let message = "";
let visible = false;
let autoHideTimeout = null;

export const showToast = (text) => {
  message = text;
  visible = true;
  renderToast();

  clearTimeout(autoHideTimeout);
  autoHideTimeout = setTimeout(() => {
    visible = false;
    renderToast();
  }, 3000);
};

export const hideToast = () => {
  visible = false;
  renderToast();
};

export const Toaster = () => html`
  <div class="toaster ${visible ? "show" : ""}">${message}</div>
`;

function renderToast() {
  const container = document.querySelector("#toaster");
  if (!container) return;
  render(Toaster(), container);
}
