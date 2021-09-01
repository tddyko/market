const state = () => ({
  tabs: null, 
  tabTitles: [
    { title: "주문" },
    { title: "예약" },
    { title: "리뷰" },
    { title: "정보" },
  ],
  panel: [],
  rating: null,
  orderMenus: [
    "메뉴1",
    "메뉴2",
    "메뉴3",
    "메뉴4",
    "메뉴5",
    "메뉴6",
    "메뉴7",
    "메뉴8",
    "메뉴9",
  ],
  ratingPoint: [
    { ratingPoint: "5점" },
    { ratingPoint: "4점" },
    { ratingPoint: "3점" },
    { ratingPoint: "2점" },
    { ratingPoint: "1점" },
  ],
  valueDeterminate: [
    { rating: 33 },
    { rating: 33 },
    { rating: 45 },
    { rating: 1532 },
    { rating: 11 },
  ],
  reserveTime: [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ],
  cards: [
    { title: "등심 가츠", flex: 9 },
    { title: "치즈 가츠", flex: 9 },
  ],
  floating: [
    { direction: "top" },
    { fab: false },
    { fling: false },
    { hover: false },
    { top: false },
    { right: true },
    { bottom: true },
    { left: false },
    { orderDialog: false },
    { reserveDialog: false },
    { reviewDialog: false },
    { notifications: false },
    { sound: true },
    { widgets: false },
    { radioGroup: 1 },
  ],
});

const getters = {
  getTabs: (state) => state.tabs,
  getTabTitles: (state) => state.tabTitles,
  getCards: (state) => state.cards,
  getOrderMenus: (state) => state.orderMenus,
  getReserveTime: (state) => state.reserveTime,
  getValueDeterminate: (state) => state.valueDeterminate,
  getRatingPoint: (state) => state.ratingPoint,
  getRating: (state) => state.rating,
  getFloating: (state) => state.floating,
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
  setOrderMenus(state, data) {
    state.orderMenus = data;
  },
  setReserveTime(state, data) {
    state.reserveTime = data;
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
  actOrderMenus({ commit }, value) {
    commit("setOrderMenus", value);
  },
  actReserveTime({ commit }, value) {
    commit("setReserveTime", value);
  },
};

export default { namespaced: true, state, getters, mutations, actions };