import Home from "../components/Home/Home.js";
import NotFound from "../components/NotFound/NotFound.js";
import Cards from "../components/Cards/Cards.js";

const routesConfiguration = {
  HOME: {
    id: "home",
    exact: true,
    path: "/home",
    component: Home,
  },
  NOTFOUND: {
    id: "notfound",
    exact: true,
    path: "*",
    component: NotFound,
  },
};

export const routes = Object.values(routesConfiguration).map((route) => {
  return route;
});

export default routesConfiguration;
