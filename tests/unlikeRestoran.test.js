import FavoriteRestoIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await new Promise((r) => setTimeout(r, 100)); 
    const unlikeButton = document.querySelector('[aria-label="Unlike this restaurant"]');
    expect(unlikeButton).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await new Promise((r) => setTimeout(r, 100)); // 
    const likeButton = document.querySelector('[aria-label="Like this restaurant"]');
    expect(likeButton).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await new Promise((r) => setTimeout(r, 100)); 

    const unlikeButton = document.querySelector('[aria-label="Unlike this restaurant"]');
    if (unlikeButton) {
      unlikeButton.dispatchEvent(new Event("click"));
    } else {
      throw new Error("Unlike button not found");
    }

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error when user click unlike widget if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await new Promise((r) => setTimeout(r, 100)); 

    await FavoriteRestoIdb.deleteRestaurant(1);

    const unlikeButton = document.querySelector('[aria-label="Unlike this restaurant"]');
    if (unlikeButton) {
      unlikeButton.dispatchEvent(new Event("click"));
    } else {
      throw new Error("Unlike button not found");
    }

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
