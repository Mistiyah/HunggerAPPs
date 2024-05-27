import UrlParser from "../../routes/url-parser";
import HunggerDBSource from "../../data/hunggerdb-sources";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return '<div id="detail-container"></div><div id="likeButtonContainer"></div>';
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const detailContainer = document.querySelector("#detail-container");
      const restaurantId = url.id;

      const restaurant = await HunggerDBSource.detailResto(restaurantId);
      detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (error) {
      console.error("Error rendering detail page:", error);
    }
  },
};

export default Detail;
