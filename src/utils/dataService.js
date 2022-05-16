import React from "react";
import axios from "axios";

export const getValues = async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const persons = res.data;
    return persons;
  });
};
