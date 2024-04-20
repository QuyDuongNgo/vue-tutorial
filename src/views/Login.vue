<template>
  <div class="min-w-[400px]">
    <h1 class="mb-6 font-bold text-2xl">Login your Account</h1>
    <LoginForm @submit="handleLogin" />
    <a-divider>Or login with</a-divider>
    <Social />
    <div class="mt-4 text-base">
      Don’t have an account?
      <router-link to="/register" class="hover:underline">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
import Social from "@/components/auth/Social.vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
    Social,
  },
  methods: {
    handleLogin(form) {
      console.log(form);
    },
  },
};
</script>
