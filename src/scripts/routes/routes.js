import Home from "../views/pages/home";
import Favorite from "../views/pages/favorite";
import Detail from "../views/pages/detail";
import Like from '../views/pages/like';


const routes = {
  "/": Home,
  "/home": Home,
  "/detail/:id": Detail,
  "/favorite": Favorite,
  "/like": Like,
};

const routeMatcher = (url) => {
  const urlParts = url.split("/");
  if (urlParts[1] === "detail" && urlParts[2]) {
    return Detail;
  }
  return routes[url]; 
};

export default routeMatcher;
