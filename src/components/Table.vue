<template>
  <div class="w-full flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table
            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
          >
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      :checked="checkAll"
                      id="checkbox-all"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      @change="handleCheckAll"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Name
                </th>

                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <tr
                v-for="(task, index) in tasksList"
                :key="index"
                class="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td class="p-4 w-4">
                  <div class="flex items-center">
                    <input
                      :checked="task.checked"
                      id="checkbox-table-5"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      @change="handleCheckTask($event, index)"
                    />
                    <label for="checkbox-table-5" class="sr-only"
                      >checkbox</label
                    >
                  </div>
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ task.name }}
                </td>

                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    class="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer mx-4"
                    @click="handleCopy(task)"
                    >Copy</a
                  >
                  <a
                    class="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    @click="handleDeleteProduct(index)"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasksList: {
      type: Array,
      default: () => [],
    },
    checkAll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleDeleteProduct(index) {
      this.$emit("handle-delete-product", index);
    },
    handleCopy(task) {
      this.$emit("handle-copy", task);
    },
    handleCheckAll(event) {
      this.$emit("hande-check-all", event.target.checked);
    },
    handleCheckTask(event, index) {
      this.$emit("check-task", { checked: event.target.checked, index });
    },
  },
};
</script>
