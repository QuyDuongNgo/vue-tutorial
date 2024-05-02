<template>
  <div class="flex h-full w-full">
    <div class="bg-blue-500 flex-1 flex justify-center items-center">
      <div class="flex items-center justify-center fixed top-10 left-10">
        <div class="icon">
          <img src="@/assets/img/Exclude.png" alt="login" />
        </div>
        <span class="text-logo">Hiphonic</span>
      </div>
      <div class="flex items-center justify-center relative">
        <img
          class="image-1"
          src="@/assets/img/background.png"
          alt="background"
        />
        <img class="image-2 absolute" src="@/assets/img/circle.png" alt="" />
        <img
          class="illus"
          src="@/assets/img/Illustration.png"
          alt="Illustration"
        />
      </div>
      <div class="content fixed">
        <h3 class="flex items-center justify-center text-1">
          Customizable Multipurpose Dashboard
        </h3>
        <p class="flex items-center justify-center text-2">
          Everything you need in an easily customizable dashboard.
        </p>
      </div>
      <div class="dot-item flex items-center justify-center">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.icon {
  margin-right: 14.74px;
}
.text-logo {
  font-size: 27.72px;
  font-weight: 700;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #fff;
}
.image-1 {
  width: 524px;
  height: 524px;
}
.image-2 {
  width: 367px;
  height: 367px;
}
.illus {
  width: 343px;
  height: 409px;
  position: absolute;
  top: 20%;
  left: 20%;
}
.content {
  bottom: 10%;
}
.text-1 {
  font-size: 24px;
  font-weight: 700;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #fff;
  line-height: 30px;
}
.text-2 {
  font-size: 14px;
  font-weight: 400;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: #fff;
  line-height: 22.4px;
}
.dot {
  width: 5px;
  height: 5px;
  box-shadow: 0 0 0 2px #fff;
  border-radius: 50%;
}
.dot-1 {
  background-color: #fff;
  margin-right: 8px;
}
.dot-2 {
  margin-right: 8px;
}
.dot-item {
  position: fixed;
  bottom: 5%;
}
</style>
