<template>
  <div class="flex gap-6 mt-4">
    <div
      class="flex-1 flex justify-center items-center gap-4 border py-3 rounded-xl cursor-pointer hover:shadow-sm hover:outline-1"
    >
      <img src="@/assets/images/icon/google.png" alt="google" />
      <span>Google</span>
    </div>
    <div
      class="flex-1 flex justify-center items-center gap-4 border py-3 rounded-xl cursor-pointer hover:shadow-sm hover:outline-1"
    >
      <img src="@/assets/images/icon/facebook.png" alt="facebook" />
      <span>Facebook</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialComp",
};
</script>
