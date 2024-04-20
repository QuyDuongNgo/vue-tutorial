import axios from "axios";
import Vue from "vue";

const baseURL = "https://dummyjson.com";

const devInstance = createInstance();

function createInstance() {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
}

Vue.prototype.$axios = devInstance;
