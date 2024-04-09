<template>
  <div class="w-full">
    <Table />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  components: {
    Table,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
