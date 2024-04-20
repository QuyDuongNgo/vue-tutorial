<template>
  <div class="flex h-full w-full">
    <div class="bg-blue-500 flex-1 flex justify-center items-center">
      content left
    </div>
    <div class="flex-1 flex justify-center items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
