import FavoriteRestoIdb from "../data/favorite-restaurant-idb";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestoIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    const isRestaurantExist = await this._isRestaurantExist(id);

    this._likeButtonContainer.innerHTML = `
      <button aria-label="${isRestaurantExist ? "Unlike this restaurant" : "Like this restaurant"}" id="${isRestaurantExist ? "unlikeButton" : "likeButton"}">${isRestaurantExist ? "Hapus Dari Favorit" : "Tambahkan Favorit"}</button>
    `;

    const buttonId = isRestaurantExist ? "#unlikeButton" : "#likeButton";
    const likeButton = document.querySelector(buttonId);
    likeButton.addEventListener("click", async () => {
      if (isRestaurantExist) {
        await this._favoriteRestaurants.deleteRestaurant(id);
      } else {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
      }

      // Refresh button state
      await this._renderButton();
    });
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },
};

export default LikeButtonPresenter;
