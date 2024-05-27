const assert = require("assert");

// eslint-disable-next-line no-undef
Feature("Liking Restaurants");

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage("/#/like");
});

// eslint-disable-next-line no-undef
Scenario("showing empty liked restaurants", async ({ I }) => {
  await I.waitForElement(".restaurant-item__not__found", 5); 
  I.see("Tidak ada restoran untuk ditampilkan", ".restaurant-item__not__found");
});

// eslint-disable-next-line no-undef
Scenario("liking one Restaurant", async ({ I }) => {
  I.waitForElement(".restaurant-item__not__found", 5);
  I.see("Tidak ada restoran untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate(".restaurant-item__name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButtonContainer");

  I.amOnPage("/#/like");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-item__name");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// eslint-disable-next-line no-undef
Scenario("Unliking restaurant", async ({ I }) => {
  I.waitForElement(".restaurant-item__not__found", 5);
  I.see("Tidak ada restoran untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate(".restaurant-item__name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButtonContainer");

  I.amOnPage("/#/like");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-item__name");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // eslint-disable-next-line no-undef
  I.click(locate(".restaurant-item__name a").withText(likedRestaurantTitle));

  I.seeElement("#unlikeButton");
  I.click("#likeButtonContainer");

  I.amOnPage("/#/like");
  I.see("Tidak ada restoran untuk ditampilkan", ".restaurant-item__not__found");
});

