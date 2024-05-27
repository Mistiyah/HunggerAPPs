import CONFIG from "../../globals/config";
import "@fortawesome/fontawesome-free/css/all.min.css";

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__header">
    <h2 class="restaurant-detail__title">${restaurant.name}</h2>
  </div>
  <div class="restaurant-detail-image-info">
    <img class="restaurant-detail__image" src="${CONFIG.API_BASE_URL}images/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant-detail__info">
      <h3>Information</h3>
      <p>Kota: ${restaurant.city}</p>
      <p>Alamat: ${restaurant.address}</p>
      <p>Rating: ${restaurant.rating}</p>
      <div class="restaurant-detail__description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="restaurant-detail__menu">
    <div>
      <h3>Menu Makanan</h3>
      <ul class="menu-food">
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
      </ul>
    </div>
    <div>
      <h3>Menu Minuman</h3>
      <ul class="menu-drink">
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}
      </ul>
    </div>
  </div>
  <div class="restaurant-detail__reviews">
    <h2>Customer Reviews</h2>
    <div class="reviews-container">
      ${restaurant.customerReviews
        .map(
          (review) => `
        <div class="review">
          <p><strong>${review.name}</strong> - ${review.date}</p>
          <p>${review.review}</p>
        </div>
      `
        )
        .join("")}
    </div>
  </div>

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__image-wrapper">
      <img class="restaurant-item__image" src="${CONFIG.API_BASE_URL}images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item__rating">
        <i class="fa fa-star"></i> ${restaurant.rating}
      </div>
    </div>
    <div class="restaurant-item__info">
      <h3 class="restaurant-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="restaurant-item__city">${restaurant.city}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
