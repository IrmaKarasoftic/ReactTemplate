import React from "react";
import axios from "axios";

const brands = [
  {
    id: "88",
    name: "Toyota",
    alias: "toyota",
  },
  {
    id: "64",
    name: "Nissan",
    alias: "nissan",
  },
  {
    id: "29",
    name: "Ford",
    alias: "ford",
  },
  {
    id: "35",
    name: "Honda",
    alias: "honda",
  },
  {
    id: "57",
    name: "Mercedes-Benz",
    alias: "mercedes-benz",
  },
];

const models = [
  {
    id: "298",
    name: "Aerostar",
    alias: "aerostar",
  },
  {
    id: "1464",
    name: "B-MAX",
    alias: "b-max",
  },
  {
    id: "299",
    name: "Bronco",
    alias: "bronco",
  },
  {
    id: "1463",
    name: "C-Max",
    alias: "c-max",
  },
  {
    id: "300",
    name: "Contour",
    alias: "contour",
  },
  {
    id: "301",
    name: "Crown Victoria",
    alias: "crown-victoria",
  },
  {
    id: "1096",
    name: "EcoSport",
    alias: "ecosport",
  },
  {
    id: "302",
    name: "Edge",
    alias: "edge",
  },
  {
    id: "303",
    name: "Escape",
    alias: "escape",
  },
  {
    id: "304",
    name: "Escort",
    alias: "escort",
  },
  {
    id: "305",
    name: "Everest",
    alias: "everest",
  },
  {
    id: "306",
    name: "Excursion",
    alias: "excursion",
  },
  {
    id: "307",
    name: "Expedition",
    alias: "expedition",
  },
  {
    id: "308",
    name: "Expedition EL",
    alias: "expedition-el",
  },
  {
    id: "309",
    name: "Explorer",
    alias: "explorer",
  },
  {
    id: "1630",
    name: "F-150",
    alias: "f-150",
  },
  {
    id: "311",
    name: "F150",
    alias: "f150",
  },
  {
    id: "312",
    name: "Fairlane",
    alias: "fairlane",
  },
  {
    id: "313",
    name: "Fiesta",
    alias: "fiesta",
  },
  {
    id: "314",
    name: "Figo",
    alias: "figo",
  },
  {
    id: "315",
    name: "Five Hundred",
    alias: "five-hundred",
  },
  {
    id: "316",
    name: "Flex",
    alias: "flex",
  },
  {
    id: "317",
    name: "Focus",
    alias: "focus",
  },
  {
    id: "1462",
    name: "Focus C-Max",
    alias: "focus-c-max",
  },
  {
    id: "1465",
    name: "Focus Electric",
    alias: "focus-electric",
  },
  {
    id: "318",
    name: "Freestar",
    alias: "freestar",
  },
  {
    id: "319",
    name: "Fusion",
    alias: "fusion",
  },
  {
    id: "1459",
    name: "Galaxy",
    alias: "galaxy",
  },
  {
    id: "320",
    name: "Granada",
    alias: "granada",
  },
  {
    id: "321",
    name: "GT",
    alias: "gt",
  },
  {
    id: "1458",
    name: "Ka",
    alias: "ka",
  },
  {
    id: "1476",
    name: "Kuga",
    alias: "kuga",
  },
  {
    id: "322",
    name: "Maverick",
    alias: "maverick",
  },
  {
    id: "323",
    name: "Megastar",
    alias: "megastar",
  },
  {
    id: "324",
    name: "Monarch",
    alias: "monarch",
  },
  {
    id: "325",
    name: "Mondeo",
    alias: "mondeo",
  },
  {
    id: "326",
    name: "Mustang",
    alias: "mustang",
  },
  {
    id: "1721",
    name: "Mustang GT",
    alias: "mustang-gt",
  },
  {
    id: "331",
    name: "Mustang-Shelby-GT500",
    alias: "mustang-shelby-gt500",
  },
  {
    id: "327",
    name: "Orion",
    alias: "orion",
  },
  {
    id: "329",
    name: "Probe",
    alias: "probe",
  },
  {
    id: "330",
    name: "Ranger",
    alias: "ranger",
  },
  {
    id: "1461",
    name: "S-Max",
    alias: "s-max",
  },
  {
    id: "1631",
    name: "Shelby GT500",
    alias: "shelby-gt500",
  },
  {
    id: "332",
    name: "Sierra",
    alias: "sierra",
  },
  {
    id: "333",
    name: "Sport Trac",
    alias: "sport-trac",
  },
  {
    id: "1460",
    name: "Streetka",
    alias: "streetka",
  },
  {
    id: "334",
    name: "Taurus",
    alias: "taurus",
  },
  {
    id: "335",
    name: "Thunderbird",
    alias: "thunderbird",
  },
  {
    id: "1466",
    name: "Tourneo Connect",
    alias: "tourneo-connect",
  },
  {
    id: "1467",
    name: "Tourneo Courier",
    alias: "tourneo-courier",
  },
  {
    id: "1075",
    name: "Transit",
    alias: "transit",
  },
];
function mapToKeyValuePair(list) {
  return list.map((item) => ({
    value: item.id,
    label: item.name,
  }));
}
export const getBrands = async () => {
  // return axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  //   const persons = res.data;
  //   return persons;
  // });
  return mapToKeyValuePair(brands);
};

export const getModels = async (carId) => {
  // return axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  //   const persons = res.data;
  //   return persons;
  // });
  return mapToKeyValuePair(models);
};
