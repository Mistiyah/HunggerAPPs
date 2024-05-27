const DrawerInitiator = {
  init({ button, drawer, content, hero }) {
    const toggleDrawer = (event) => {
      event.stopPropagation();
      drawer.classList.toggle("open");
    };

    const closeDrawer = (event) => {
      event.stopPropagation();
      drawer.classList.remove("open");
    };

    if (button && drawer && content && hero) {
      button.addEventListener("click", toggleDrawer);
      content.addEventListener("click", closeDrawer);
      hero.addEventListener("click", closeDrawer);
    } else {
      console.error("One or more elements are missing.");
    }
  },
};

export default DrawerInitiator;
