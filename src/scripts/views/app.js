import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routeMatcher from "../routes/routes";

class App {
  constructor({ button, drawer, content, hero }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const Page = routeMatcher(url);

    try {
      if (Page) {
        this._content.innerHTML = await Page.render();
        await Page.afterRender();

        const skipLinkElem = document.querySelector(".skip-to-content");
        skipLinkElem.addEventListener("click", (event) => {
          event.preventDefault();
          document.querySelector("#mainContent").focus();
        });
      } else {
        console.error("Halaman tidak ditemukan:", url);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat merender halaman:", error);
    }
  }
}

export default App;
