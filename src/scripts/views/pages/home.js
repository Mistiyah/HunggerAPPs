import HunggerDBSource from "../../data/hunggerdb-sources";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <section>
        <h2 class="list-title">Explore Restaurant</h2>
        <div class="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await HunggerDBSource.getAllRestaurants();
      const restaurantList = document.querySelector(".restaurant-list");

      if (!restaurants || restaurants.length === 0) {
        restaurantList.innerHTML = "<p>No restaurants available.</p>";
      } else {
        restaurantList.innerHTML = restaurants.map((restaurant) => createRestaurantItemTemplate(restaurant)).join("");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      document.querySelector(".restaurant-list").innerHTML = "<p>Error loading restaurants. Please try again later.</p>";
    }
  },
};

export default Home;
