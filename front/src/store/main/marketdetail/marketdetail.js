const state = () => ({
    rat: "4.5",
    tabs: null,
    tabTitles: [
      { title: "주문" },
      { title: "예약" },
      { title: "리뷰" },
      { title: "정보" },
    ],
    panel: [],
    tags: ["메뉴1"],
    cards: [
      { title: "등심 가츠", flex: 9 },
      { title: "치즈 가츠", flex: 9 },
    ],
  });
  
  const getters = {
    getTabs: (state) => state.tabs,
    getTabTitles: (state) => state.tabTitles,
    getCards: (state) => state.cards,
    getTags: (state) => state.tags,
  };
  
  const mutations = {
    setTabs(state, data) {
      state.tabs = data;
    },
    setTabTitles(state, data) {
      state.tabTitles = data;
    },
    setCards(state, data) {
      state.cards = data;
    },
    setTags(state, data) {
      state.tags = data;
    },
  };
  
  const actions = {
    actTabs({ commit }, value) {
      commit("setTabs", value);
    },
    actTabTitles({ commit }, value) {
      commit("setTabTitles", value);
    },
    actCards({ commit }, value) {
      commit("setCards", value);
    },
    actTags({ commit }, value) {
      commit("setTags", value);
    },
  };
  
  export default { namespaced: true, state, getters, mutations, actions };