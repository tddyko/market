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
};

const mutations = {
  setTab(state, data) {
    state.tab = data;
  },
};

const actions = {
  actTab({ commit }, value) {
    commit("setTab", value);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
