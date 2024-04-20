import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoadingBtn: false,
  },
  mutations: {
    SET_LOADING_BUTTON(state, payload) {
      state.isLoadingBtn = payload;
    },
  },
  actions: {
    setLoadingButton({ commit }, payload) {
      commit("SET_LOADING_BUTTON", payload);
    },
  },
  getters: {
    isLoadingBtn(state) {
      return state.isLoadingBtn;
    },
  },
  modules: {
    auth,
  },
});

export default store;
