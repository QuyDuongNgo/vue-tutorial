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
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
    Social,
  },
  methods: {
    ...mapActions("auth", ["setToken", "setIsLogin", "fetchUser"]),
    ...mapActions(["setLoadingButton"]),
    async handleLogin(form) {
      try {
        this.setLoadingButton(true);
        const { data } = await this.$axios.post("/auth/login", form);
        if (data) {
          const { token } = data;
          localStorage.setItem("token", token);
          await this.fetchUser();
          this.setToken(token);
          this.setIsLogin(true);
          this.$router.push("/");
          this.$message.success("Login successfully!");
        }
      } catch (error) {
        console.log(error);
        this.$message.error(error.response.data.message);
      } finally {
        this.setLoadingButton(false);
      }
    },
  },
};
</script>
