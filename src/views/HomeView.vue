<template>
  <div class="w-full max-w-[1200px] mx-auto">
    <h1 class="text-2xl mb-4">Todo List</h1>
    <div class="mb-4 flex items-center gap-4">
      <Input />
      <button
        class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
      >
        Add
      </button>
    </div>
    <Table />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import Input from "../components/Input.vue";
export default {
  components: {
    Table,
    Input,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
