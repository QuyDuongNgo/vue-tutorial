<template>
  <div class="w-full max-w-[1200px] mx-auto">
    <h1 class="text-2xl mb-4">Todo List</h1>
    <div class="mb-4 flex items-center gap-4">
      <input
        v-model="name"
        type="text"
        name="price"
        id="price"
        class="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Name"
      />
      <button
        class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
        @click="handleAddProduct"
      >
        Add
      </button>
    </div>
    <div class="mb-4 flex items-center gap-4">
      <input
        v-model="search"
        type="text"
        name="price"
        id="price"
        class="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Product"
      />
      <button
        class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
        @click="handleSearch"
      >
        Search
      </button>
    </div>
    <div class="mb-1 float-end">
      <button
        class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
        @click="handleClear"
      >
        Delete All
      </button>
    </div>
    <Table
      :tasksList="tasks"
      :checkAll="checkAll"
      :filterList="filterList"
      @handle-delete-product="deleteProcedurt"
      @handle-copy="handleCopy"
      @hande-check-all="handleCheckedAll"
      @check-task="handleCheckTask"
    />
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
      name: "",
      tasks: [],
      search: "",
      checkAll: false,
      filterTask: [],
    };
  },
  computed: {
    filterList() {
      return this.filterTask.length > 0 ? this.filterTask : this.tasks;
    },
  },
  watch: {
    tasks() {
      if (this.tasks.length == 0) {
        return (this.checkAll = false);
      } else {
      this.checkAll = this.tasks.every((task) => {
        return task.checked;
      });
      }
    },
  },
  methods: {
    handleAddProduct() {
      this.tasks.push({
        checked: false,
        name: this.name,
      });
      this.name = "";
    },
    deleteProcedurt(index) {
      this.tasks.splice(index, 1);
    },
    handleCopy(task) {
      this.tasks.push({
        checked: false,
        name: task.name,
      });
    },
    handleSearch() {
      this.filterTask = this.tasks.filter((task) => {
        return task.name.includes(this.search);
      });
    },
    handleCheckedAll(checked) {
      this.tasks = this.tasks.map(function (task) {
        return { ...task, checked: checked };
      });
      this.checkAll = checked;
    },
    handleCheckTask(payload) {
      this.tasks = this.tasks.map(function (task, index) {
        return {
          ...task,
          checked: payload.index == index ? payload.checked : task.checked,
        };
      });
    },
    handleClear() {
      this.tasks = this.tasks.filter((task) => !task.checked);
    },
  },
};
</script>
