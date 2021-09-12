import axios from 'axios';
import router from '../../../router'
const state = () => ({
  reservations_number: 1,
  tabs: null,
  select_items: [
    "주문리뷰",
    "예약리뷰"
  ],
  tabTitles: [
    { title: "주문" },
    { title: "예약" },
    { title: "리뷰" },
    { title: "정보" },
  ],
  panel: [],
  rating: null,
  orderMenus: [],
  ratingPoint: [],
  valueDeterminate: [ ],
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
  room:[],
  reservation:[],
  selectmenu:[],
  addmenu:[],
  selectOptions: [],
  selectRoom :[],
  reviews:[],
  orderedInformation : {
    requirement : null,
    phoneNumber : null,
    dt_address : null,
    address : null
  }
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
  getSelectmenu: (state) => state.selectmenu,
  getAddmenu: (state) => state.addmenu,
  getSelectOptions : (state) =>state.selectOptions,
  getSelect: (state) => state.select_items,
  getReviews : (state) => state.reviews,
  getOrderedInformation : (state) => state.orderedInformation,
  getSelectRoom : (state)=> state.selectRoom

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
  setReservations_number(state, data){
    state.reservations_number = data;
  },
  setReserveTimeCh(state, data){
    state.reserveTimeCh = state.reserveTime[data]
  },
  setRoom(state, data){
    state.room = data;
  },
  setReservations_number_plus(state) {
    state.reservations_number += 1;
  },
  setReservations_number_minus(state) {
    state.reservations_number -= 1;
  },
  setReservation(state, data){
    state.reservation = data;
  },
  setSelectmenu(state, data){
    state.selectmenu.push(data);
  },
  setAddmenu(state, data){
    state.addmenu = data;
  },
  setSelectOptions(state, data){
    state.selectOptions[data.index] = data.value
  },
  incrementItemQuantity(state, cartItem) {
    console.log(cartItem)
    cartItem.quantity++;
    state.selectmenu.push()
  },
  decrementItemQuantity(state, cartItem) {
    console.log(cartItem)
    cartItem.quantity--;
    state.selectmenu.push()
  },
  setReviews : (state,data) => state.reviews = data,
  setRating(state, data){
        console.log("setRating : " + data);
        state.rating = data.ratingAvg;
        console.log(data.ratingsCount)
        for(let i in state.valueDeterminate){
          state.valueDeterminate[i].rating = data.ratingsCount[i]
        }
  },
  setOrderedInformation(state,data){
    console.log(data)
    state.orderedInformation = data
    console.log(state.orderedInformation)
  },
  setSelectRoom(state,value){
    state.selectRoom = value
  }
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
      console.log('sesese')
      console.log(response.data);
      commit("setMarketTitle", response.data);
    })
  },
  actRating({ commit }, value) {
        axios({
          url: `http://localhost/market_preview/${value}/totalRating`,
          method: 'get',
        }).then((response)=>{
          console.log(response.data)
          commit("setRating", response.data);
        })
  },
  actReviews({ commit }, value) {
    console.log(value.switch);
    if(value.switch == 0){
      axios({
            url: `http://localhost/order_review/reviews/list/${value.market_name}`,
            method: 'get',
      }).then((response)=>{
            console.log(response.data)
            commit("setReviews", response.data)
      })
    }
    else{
      axios({
         url: `http://localhost/reseve_review/reviews/list/${value.market_name}`,
         method: 'get',
      }).then((response)=>{
            console.log(response.data)
            commit("setReviews", response.data)
      })
    }
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
  actReservations_number_plus({ commit }) {
    commit("setReservations_number_plus");
  },
  actReservations_number_minus({ commit }) {
    commit("setReservations_number_minus");
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
  actReservation({ getters },value) {
    axios({
      url: `http://localhost/reservation/in/${value.marketName}`,
      method : 'post',
      headers: {},
      withCredentials: true,
      data: {
        current_state : "예약",
        order_count : getters.getReservations_number,
        reserve_date: getters.Reservation_Get_date,
        reserve_time: getters.getReserveTimeCh,
        reserve_seat: getters.getSelectRoom.room
      }
  }).then((response) => {
    console.log(response.data);
    commit("setReserveTime", value);
    })
  },
  actOrder({getters}, value){
  console.log('주문합니다')
  console.log(value)
    for(let order of value.orderItem){
      axios({
        url : `http://localhost/reservation/in/${value.marketName}`,
        method : 'post',
        headers :{},
        withCredentials : true,
        data :{
          current_state : "주문",
          order_count : order.quantity,
          name : order.name,
          phonenumber : value.orderInfo.phoneNumber,
          address : value.orderInfo.address,
          dt_address : value.orderInfo.dt_address,
          requirements : value.orderInfo.requirement
        }
      }).then(async(res)=>{
        if(res.data.message !== 0){
          alert(res.data.message)
          router.push({ name: 'Login.vue' });
        }else{
            alert('주문이 완료 되었습니다')
            router.push({name : 'MarketDetail'})
        }
      })
    }
  },
  actIncrementItemQuantity({commit}, value) {
    commit("incrementItemQuantity", value);
  },
  actDecrementItemQuantity({commit}, value) {
    commit("decrementItemQuantity", value);
  },
  actSelectmenu({commit},value){commit("setSelectmenu",value)},

};

export default { namespaced: true, state, getters, mutations, actions };
