const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `
      <button aria-label="Like this restaurant" id="likeButton">Tambahkan Favorit</button>
    `;

    const likeButton = this._likeButtonContainer.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `
      <button aria-label="Unlike this restaurant" id="unlikeButton">Hapus Dari Favorit</button>
    `;

    const unlikeButton = this._likeButtonContainer.querySelector("#unlikeButton");
    unlikeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
