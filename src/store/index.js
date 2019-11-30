import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let getAxiosList = async function() {
  let list = [];
  let ran = Math.floor(Math.random() * 3);
  if (ran < 2) {
    let axiosList = await axios
      .get("data.json")
      .then(res => res.data)
      .then(data => data.list || []);
    list = ran === 1 ? [axiosList[0]] : axiosList;
  }
  return list;
};

let getList = async function(commit) {
  return new Promise(async resolve => {
    commit("SET_LOADING", true);
    setTimeout(async () => {
      let list = await getAxiosList();
      commit("SET_LIST", list);
      commit("SET_LOADING", false);
    }, 2500);
    return resolve();
  });
};

export default new Vuex.Store({
  state: {
    isLoading: false,
    list: []
  },
  mutations: {
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_LIST(state, value) {
      state.list = value;
    }
  },
  actions: {
    async GET_LIST({ commit }) {
      if (this.isLoading) return false;
      return new Promise(async resolve => {
        await getList(commit);
        return resolve();
      });
    }
  },
  modules: {}
});
