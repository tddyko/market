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
    //엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
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
  actTabTitle({ commit }, v) {
    commit("setTabTitle", v);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
