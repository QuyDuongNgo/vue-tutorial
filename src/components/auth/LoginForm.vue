<template>
  <a-form-model ref="ruleForm" layout="vertical" :model="form" :rules="rules">
    <a-form-model-item prop="username">
      <a-input v-model="form.username" placeholder="Username">
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item prop="password">
      <a-input-password v-model="form.password" placeholder="Password">
        <a-icon slot="prefix" type="lock" />
      </a-input-password>
    </a-form-model-item>
    <a-form-model-item>
      <a-checkbox value="1" name="type"> Remember me </a-checkbox>
    </a-form-model-item>
    <a-form-model-item class="text-center w-full">
      <a-button
        class="w-full !font-semibold !text-xl"
        type="primary"
        @click="submit"
      >
        Login
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input Username",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input Password",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
        }
      });
    },
  },
};
</script>
