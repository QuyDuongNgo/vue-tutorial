<template>
  <div class="w-[400px]">
    <h1 class="mb-6 font-bold text-2xl">Login your Account</h1>
    <LoginForm @submit="handleLogin" />
    <a-divider>Or login with</a-divider>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },
  methods: {
    handleLogin(form) {
      console.log(form);
    },
  },
};
</script>
