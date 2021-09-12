const state = () => ({
  //주문 내역, 주문 리뷰
  Order_menu: null,
  Order_menu2: false,
  Order_tab: null,
  Order_dates: [],//달력으로 날짜 고르는 것
  Order_date: new Date().toISOString().substring(0,10),

  //예약 내역, 예약 리뷰
  Reservation_tab: null,
  Reservation_menu: null,
  Reservation_menu2: false,
  Reservation_dates: [], //달력으로 날짜 고르는 것
  Reservation_date: new Date().toISOString().substring(0,10),
});

const mutations = {
  //주문 내역, 주문 리뷰
  Order_Set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Order_tab = tab;
  },
  Order_Set_Menu(state, value) {
    state.Order_menu = value;
  },
  Order_Set_Menu2(state, value) {
    state.Order_menu2 = value;
  },
  Order_Set_Dates(state, value){ 
    state.Order_dates = value;
  },
  Order_Update_Menu(state) {
    state.Order_menu = null;
  },
  Order_Update_Menu2(state) {
    if (state.Order_dates.length === 2) {
      state.Order_menu2 = null;
    }
  },
  Order_Set_Date(state, value){
    state.Order_date = value;
  },
  //예약 내역, 예약 리뷰 관리
  Reservation_Set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Reservation_tab = tab;
  },
  Reservation_Set_Menu(state, value) {
    state.Reservation_menu = value;
  },
  Reservation_Set_Menu2(state, value) {
    state.Reservation_menu2 = value;
  },
  Reservation_Set_Dates(state, value){
    state.Reservation_dates = value;
  },
  Reservation_Update_Menu(state) {
    state.Reservation_menu = null;
  },
  Reservation_Update_Menu2(state) {
    if (state.Reservation_dates.length === 2) {
      state.Reservation_menu2 = null;
    }
  },
  Reservation_Set_Date(state, value){
    state.Reservation_date = value;
  }
};

const getters = {
  //주문 내역, 주문 리뷰
  Order_Get_Tab(state){
    return state.Order_tab;
  },
  Order_Get_Menu(state){
    return state.Order_menu;
  },
  Order_Get_Menu2(state){
    return state.Order_menu2;
  },
  Order_Get_Dates(state){
    return state.Order_dates;
  },
  Order_Get_Date(state){
    return state.Order_date;
  },

// 예약 내역, 예약 리뷰
  Reservation_Get_Tab(state){
    return state.Reservation_tab;
  },
  Reservation_Get_Menu(state){
    return state.Reservation_menu;
  },
  Reservation_Get_Menu2(state){
    return state.Reservation_menu2;
  },
  Reservation_Get_dates(state){
    return state.Reservation_dates;
  },
  Reservation_Get_date(state){
    return state.Reservation_date;
  }
};

const actions = {
  Order_Set_Tab_Actions ({ commit }, value) {
    commit('Order_Set_Tab', value)
  },
  Order_Set_Date_Actions ({ commit }, value) {
    commit('Order_Set_Date', value)
  },
  Order_Set_Dates_Actions ({ commit }, value) {
    commit('Order_Set_Dates', value)
  },
  Order_Set_Menu_Actions ({ commit }, value) {
    commit('Order_Set_Menu', value)
  },
  Order_Set_Menu2_Actions ({ commit }, value) {
    commit('Order_Set_Menu2', value)
  },

  //예약 내역, 예약 리뷰
  Reservation_Set_Tab_Actions ({ commit }, value) {
    commit('Reservation_Set_Tab', value)
  },
  Reservation_Set_Date_Actions ({ commit }, value) {
    commit('Reservation_Set_Date', value)
  },
  Reservation_Set_Dates_Actions ({ commit }, value) {
    commit('Reservation_Set_Dates', value)
  },
  Reservation_Set_Menu_Actions ({ commit }, value) {
    commit('Reservation_Set_Menu', value)
  },
  Reservation_Set_Menu2_Actions ({ commit }, value) {
    commit('Reservation_Set_Menu2', value)
  },
};



export default {namespaced: true, state, getters, mutations, actions};
