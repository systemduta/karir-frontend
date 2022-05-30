import axios from "../../plugins/axios";
import { setHeaderToken, removeHeaderToken } from "../../utils/auth";

const state = {
  user: null,
  isLoggedIn: false,
};

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  user(state) {
    return state.user;
  },
};

const actions = {
  login({ dispatch, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("login", data)
        .then((response) => {
          const token = response.data.data.token;
          localStorage.setItem("token", token);
          setHeaderToken(token);
          dispatch("getUser");
          resolve(response);
        })
        .catch((err) => {
          commit("resetLoggedInUser");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  async getUser({ commit }) {
    if (!localStorage.getItem("token")) {
      return;
    }

    try {
      let response = await axios.get("get_user");
      commit("setLoggedInUser", response.data.data);
    } catch (error) {
      commit("resetLoggedInUser");
      removeHeaderToken();
      localStorage.removeItem("token");
      return error;
    }
  },
  logout({ commit }) {
    if (!localStorage.getItem("token")) {
      return false;
    }

    commit("resetLoggedInUser");
    removeHeaderToken();
    localStorage.removeItem("token");
    return true;
  },
};

const mutations = {
  setLoggedInUser(state, data) {
    state.user = data;
    state.isLoggedIn = true;
  },
  resetLoggedInUser(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
