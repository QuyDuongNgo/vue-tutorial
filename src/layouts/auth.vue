<template>
  <div class="flex h-full w-full">
    <div class="bg-blue-500 flex-1 flex flex-col justify-center items-center">
      <div>
        <img src="@/assets/images/logo/auth.png" alt="login" />
      </div>
      <h2 class="text-white text-2xl font-bold">
        Customizable Multipurpose Dashboard
      </h2>
      <span class="text-white opacity-80"
        >Everything you need in an easily customizable dashboard.</span
      >
    </div>
    <div class="flex-1 flex justify-center items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
