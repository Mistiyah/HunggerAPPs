import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <section>
        <h2 class="list-title">Favorite Restaurants</h2>
        <div id="favorite-restaurants" class="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantContainer = document.querySelector("#favorite-restaurants");

      if (!restaurants || restaurants.length === 0) {
        restaurantContainer.innerHTML = "<p>No favorite restaurants found.</p>";
      } else {
        restaurantContainer.innerHTML = restaurants.map((restaurant) => createRestaurantItemTemplate(restaurant)).join("");
      }
    } catch (error) {
      console.error("Error fetching favorite restaurants:", error);
      document.querySelector("#favorite-restaurants").innerHTML = "<p>Error loading favorite restaurants. Please try again later.</p>";
    }
  },
};

export default Favorite;
