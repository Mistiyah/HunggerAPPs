import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import FavoriteRestoView from "./liked-restaurant/favorite-resto-view";
import FavoriteRestoShowPresenter from "./liked-restaurant/favorite-resto-show-presenter";

const view = new FavoriteRestoView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
