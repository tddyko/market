import axios from "axios";
const state = () => ({
  tab: null,
  tabTitle: [
    { title: "치킨" },
    { title: "피자" },
    { title: "한식" },
    { title: "중식" },
    { title: "일식" },
    { title: "양식" },
    { title: "베이커리" },
  ],
});

const getters = {
  getTab: (state) => state.tab,
  getTabTitle: (state) => state.tabTitle,
};

const mutations = {
  setTab(state, data) {
    state.tab = data;
  },
  setTabTitle(state, data) {
    state.tabTitle = data;
  },
};

const actions = {
  actTab({ commit }, value) {
    commit("setTab", value);
  },
  actTabTitle({ commit }) {
    axios({
      url: "http://localhost/markets/categorys/list",
      method: "get",
    }).then((response) => {
      commit("setTabTitle",  response.data.name);
    })
  },
};

export default { namespaced: true, state, getters, mutations, actions };
