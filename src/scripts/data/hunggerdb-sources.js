 
import API_ENDPOINTS from "../globals/api-endpoints";

class HunggerDBSource {
  static async getAllRestaurants() {
    try {
      const response = await fetch(API_ENDPOINTS.HOME);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant data");
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      return null;
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINTS.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error("Error fetching restaurant detail:", error);
      return {};
    }
  }
}

export default HunggerDBSource;
