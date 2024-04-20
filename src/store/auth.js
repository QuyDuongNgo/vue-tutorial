import axiosInstance from "../plugins/axios";

const state = {
  isLogin: false,
  token: null,
  authUser: null,
};

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_AUTH_USER(state, payload) {
    state.authUser = payload;
  },
  SET_IS_LOGIN(state, payload) {
    state.isLogin = payload;
  },
};

const actions = {
  setToken({ commit }, payload) {
    commit("SET_TOKEN", payload);
  },
  setAuthUser({ commit }, payload) {
    commit("SET_AUTH_USER", payload);
  },
  setIsLogin({ commit }, payload) {
    commit("SET_IS_LOGIN", payload);
  },
  async fetchUser({ commit }) {
    try {
      const user = await axiosInstance.get("/auth/me");
      commit("SET_AUTH_USER", user.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  isLogin(state) {
    return state.isLogin;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
