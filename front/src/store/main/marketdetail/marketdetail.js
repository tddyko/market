import axios from 'axios';
const state = () => ({
  reservations_number: 1,
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
  reserveTime: [],
  reserveTimeCh: [],
  cards: [],
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
  marketTitle:null,
  product: [],
  optionGroup : [],
  reserveCount:1,
  room:[],
  reservation:[]
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
  getMarketTitle: (state) => state.marketTitle,
  getProduct: (state) => state.product,
  getOptionGroup: (state) => state.optionGroup,
  getReserveCount: (state) => state.reserveCount,
  getReserveTimeCh: (state) => state.reserveTimeCh,
  getRoom: (state) => state.room,
  getReservation: (state) => state.reservation,
  getReservations_number: (state) => state.reservations_number,
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
  setMarketTitle(state, data){
    state.marketTitle = data;
  },
  setOptionGroup(state, data){
    state.optionGroup = data;
  },
  setReserveCount(state, data){
    state.reserveCount = data;
  },
  setReserveTimeCh(state, data){
    state.reserveTimeCh = state.reserveTime[data]
  },
  setRoom(state, data){
    state.room = data;
  },
  setReservation(state, data){
    state.reservation = data;
  }
};
/*  */
  setReservations_number_plus(state) {
    state.reservations_number += 1;
  },
  setReservations_number_minus(state) {
    state.reservations_number -= 1;
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
    axios({
      url: `http://localhost/menu/list/${value}`,
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    }).then((response) => {
      console.log(response.data);
      commit("setCards", response.data);
    })
  },
  actOrderMenus({ commit }, value) {
    commit("setOrderMenus", value);
  },
  actReserveTime({ commit }, value) {
    axios({
      url: `http://localhost/dashboard/${value}`,
      method: "get",
      headers:{},
      withCredentials: true,
    }).then(async (response) => {
      console.log(response.data);
      await commit("setReserveTime", response.data);
    })
  },
  actMarketTitle({ commit },value) {
    axios({
      url: `http://localhost/market_preview/${value}/imformation`,
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    }).then((response) => {
      console.log(response.data);
      commit("setMarketTitle", response.data);
    })
  },
  actOptionGroup({ commit },value) {
    axios({
      url: `http://localhost/menu_option/addGroup/${value}`,
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    }).then((response) => {
      console.log(response.data);
      commit("setOptionGroup", response.data);
    })
  },
  actRoom({ commit },value) {
    axios({
      url: `http://localhost/market_preview/roomlist/${value}`,
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    }).then((response) => {
      console.log(response.data);
      commit("setRoom", response.data)
    })
  },
  actReservation({ commit },value) {
    console.log(value);
    axios({
      url: `http://localhost/reservation/in/${value.marketName}`,
      method : 'post',
      headers: {},
      withCredentials: true,
      data: {
        current_state : "예약",
        order_count : value.count,
        reserve_date: value.date,
        reserve_time: value.time,
        reserve_seat: value.room
      }
  }).then((response) => {
    console.log(response.data);
  })
  }
    commit("setReserveTime", value);
  },
  actReservations_number_plus({ commit }) {
    commit("setReservations_number_plus");
  },
  actReservations_number_minus({ commit }) {
    commit("setReservations_number_minus");
  },
};

export default { namespaced: true, state, getters, mutations, actions };
