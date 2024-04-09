<template>
  <div>
    <span class="text-red-600 font-semibold">{{ count }}</span>
    <button>Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
