import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/admin",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const loggedIn = localStorage.getItem("userToken");
  if (!loggedIn && to.name !== "login") {
    next({ name: "login" });
  } else next();
});

export default router;
