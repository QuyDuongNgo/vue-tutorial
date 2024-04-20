import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/antd.js";

import "./assets/main.css";
import "./assets/tailwind/index.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
