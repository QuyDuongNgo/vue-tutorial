<template>
  <div class="w-[400px]">
    <h3 class="text-1 mb-6">Sign Up for an Account</h3>
    <a-form class="form-login">
      <a-form-item
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
            placeholder="Email"
          >
            <a-icon
              slot="prefix"
              type="mail"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
      </a-form-item>
      <p class="text my-3">Your password must have at least 8 characters</p>
      <a-form-item>
        <div class="inline-flex">
          <a-checkbox @change="handleCheck"></a-checkbox>
          <p class="leading-4 ml-[10px] mt-[11px] box-border text">
            By creating an account means you agree to the
            <strong class="text-black">Terms & Conditions</strong> and our
            <strong class="text-black">Privacy Policy</strong>
          </p>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button text-3 !rounded-[12px] mt-3"
        >
          Sign Up
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleCheck() {},
  },
};
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  border-radius: 8px;
}
.ant-form-item {
  margin-bottom: 0;
}
.text-1 {
  font-size: 24px;
  font-weight: 700;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #000;
  line-height: 30px;
}
.text {
  font-size: 12px;
  font-weight: 400;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #94a3b8;
  line-height: 19.2px;
}
.text-3 {
  font-size: 16px;
  font-weight: 700;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #fff;
  line-height: 30px;
}
.login-form-button {
  width: 100%;
  height: 56px;
}
.form-login .ant-row .ant-form-item {
  padding: 8px 0;
}
::v-deep .ant-input {
  height: 56px !important;
}
</style>
