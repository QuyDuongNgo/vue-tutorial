<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";
import AuthLayout from "./layouts/auth.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DefaultLayout,
    AuthLayout,
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setToken(token);
      this.setIsLogin(true);
      await this.fetchUser();
    }
  },
  computed: {
    ...mapGetters("auth", ["isLogin"]),
    layout() {
      return this.isLogin ? "DefaultLayout" : "AuthLayout";
    },
  },
  methods: {
    ...mapActions("auth", ["fetchUser", "setToken", "setIsLogin"]),
  },
};
</script>
