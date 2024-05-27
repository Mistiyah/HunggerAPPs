import CONFIG from "../globals/config";

const API_ENDPOINTS = {
  HOME: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  FAVORITE: `${CONFIG.API_BASE_URL}/favorite`,
};

export default API_ENDPOINTS;
