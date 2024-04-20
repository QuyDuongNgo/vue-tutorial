import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        auth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        auth: false,
      },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/admin",
      name: "home",
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const loggedIn = localStorage.getItem("token");
  if (!loggedIn && to.meta.auth && to.name !== "login") {
    next({ name: "login" });
  } else if (loggedIn && !to.meta.auth) {
    next({ name: "home" });
  } else next();
});

export default router;
