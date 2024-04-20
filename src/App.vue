<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";
import AuthLayout from "./layouts/auth.vue";
import { mapState } from "vuex";
export default {
  components: {
    DefaultLayout,
    AuthLayout,
  },

  computed: {
    ...mapState(["isLogin"]),
    layout() {
      return this.isLogin ? "DefaultLayout" : "AuthLayout";
    },
  },
};
</script>
