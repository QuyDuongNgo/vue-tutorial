import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/antd.js";
import axiosInstance from "./plugins/axios.js";

import "./assets/main.css";
import "./assets/tailwind/index.css";
import "./assets/antd/custom.less";

Vue.prototype.$axios = axiosInstance;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
