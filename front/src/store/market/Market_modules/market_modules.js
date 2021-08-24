const state = () => ({
  //주문 내역, 주문 리뷰
  Order_menu: null,
  Order_menu2: false,
  Order_Tab: null,
  Order_dates: [],
  Order_date: new Date().toISOString().substring(0,10),

  //예약 내역, 예약 리뷰
  Reservation_Tab: null,
  Reservation_menu: null,
  Reservation_menu2: false,
  Reservation_dates: [],
  Reservation_date: new Date().toISOString().substring(0,10),
});

const mutations = {
  //주문 내역, 주문 리뷰
  Order_Set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Order_Tab = tab;
  },
  Order_Set_Menu(state, value) {
    state.Order_menu = value;
  },
  Order_Set_dates(state, value){
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
  Order_Set_date(state, value){
    state.Order_date = value;
  },
  //예약 내역, 예약 리뷰 관리
  Reservation_Set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Reservation_Tab = tab;
  },
  Reservation_Set_Menu(state, value) {
    state.Reservation_Tmenu = value;
  },
  Reservation_Set_dates(state, value){
    state.Reservation_Tdates = value;
  },
  Reservation_Update_Menu(state) {
    state.Reservation_Tmenu = null;
  },
  Reservation_Update_Menu2(state) {
    if (state.Reservation_Tdates.length === 2) {
      state.Reservation_Tmenu2 = null;
    }
  },
  Reservation_Set_date(state, value){
    state.Reservation_Tdate = value;
  }
};

const getters = {
  //주문 내역, 주문 리뷰
  Order_Get_Tab(state){
    return state.Order_Tab;
  },
  Order_Get_Menu(state){
    return state.Order_menu;
  },
  Order_Get_Menu2(state){
    return state.Order_menu2;
  },
  Order_Get_dates(state){
    return state.Order_dates;
  },
  Order_Get_date(state){
    return state.Order_date;
  },

// 예약 내역, 예약 리뷰
  Reservation_Get_Tab(state){
    return state.Reservation_Tab;
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
  test ({ commit }, value) {
    commit('Order_Set_date', value)
  }
};



export default {namespaced: true, state, getters, mutations, actions};
