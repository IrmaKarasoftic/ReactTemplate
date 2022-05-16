import Home from "../components/Home/Home.js";
import NotFound from "../components/NotFound/NotFound.js";
import Car from "../components/Car/Car";
import VinDecoder from "../components/Vindecoder/VinDecoder.js";
import Cars from "../components/Cars/Cars.js";
import Cards from "../components/Cards/Cards.js";

const routesConfiguration = {
  HOME: {
    id: "home",
    exact: true,
    path: "/home",
    component: Home,
  },
  CAR: {
    id: "car",
    exact: true,
    path: "/car/:id",
    component: Car,
  },
  VIN: {
    id: "vin",
    exact: true,
    path: "/vin",
    component: VinDecoder,
  },
  CARS: {
    id: "cars",
    exact: true,
    path: "/cars",
    component: Cars,
  },
  CARS: {
    id: "cards",
    exact: true,
    path: "/cards",
    component: Cards,
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
