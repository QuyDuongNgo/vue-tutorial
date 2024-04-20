<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";
export default {
  components: {
    DefaultLayout,
  },
};
</script>
