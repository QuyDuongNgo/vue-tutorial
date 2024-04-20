<template>
  <div class="w-full flex flex-col">
    {{ counter }}
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
                  <span
                    class="text-left text-gray-700 uppercase dark:text-gray-400"
                    >Action</span
                  >
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <tr
                v-for="(task, index) in filterList"
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
                    @click="showModalEdit(task, index)"
                    >Edit</a
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

      <div v-show="isShowEdit">
        <div
          id="updateProductModal"
          tabindex="-1"
          class="overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div
            class="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto top-1/4"
          >
            <!-- Modal content -->
            <div
              class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
            >
              <!-- Modal header -->
              <div
                class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
              >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Update Task
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="updateProductModal"
                  @click="closeUpdateTask()"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Name</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      v-if="editItem"
                      v-model="editItem.name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. Apple iMac 27&ldquo;"
                    />
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <button
                    type="button"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    @click="saveTask"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    @click="closeUpdateTask"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    filterList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editItem: null,
      isShowEdit: false,
      editIndex: null,
    };
  },
  computed: {
    ...mapState(["counter"]),
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
    showModalEdit(task, index) {
      this.editItem = { ...task };
      this.editIndex = index;
      this.isShowEdit = true;
    },
    closeUpdateTask() {
      this.isShowEdit = false;
      this.editItem = null;
    },
    saveTask() {
      this.$emit("handle-save", { item: this.editItem, index: this.editIndex });
      this.isShowEdit = !this.isShowEdit;
    },
  },
};
</script>

<style scoped>
.modalColor {
  display: none; /* Ẩn overlay ban đầu */
  position: fixed; /* Hiển thị overlay dựa trên vị trí tuyệt đối */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Màu nền làm mờ */
  z-index: 999; /* Z-index thấp hơn so với modal để hiển thị phía sau */
}
</style>
