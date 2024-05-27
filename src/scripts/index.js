import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "regenerator-runtime/runtime";
import "../styles/main.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector(".hamburger"),
  drawer: document.querySelector(".nav-body"),
  content: document.querySelector("main"),
  hero: document.querySelector(".hero"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
