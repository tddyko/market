const state = () => ({
  drawer: true,
  items: [
    { title: "대시보드", icon: "mdi-view-dashboard", to: "/market" },
    {
      title: "주문관리",
      icon: "mdi-clipboard-text",
      items: [
        { title: "주문내역", to: "/market/order" },
        { title: "리뷰 관리", to: "/market/order/review" },
      ],
    },
    {
      title: "예약관리",
      icon: "mdi-account-multiple-outline",
      items: [
        { title: "예약내역", to: "/market/reservation" },
        { title: "리뷰관리", to: "/market/reservation/review" },
      ],
    },
    { title: "기본정보", icon: "mdi-information", to: "/market/info" },
  ],
});

const getters = {
  getDrawer: (state) => state.drawer,
};
const mutations = {
  setDrawer(state, data) {
    state.drawer = data;
  },
};
const actions = {
  toggleDrawer({ commit }, value) {
    commit("setDrawer", value);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
