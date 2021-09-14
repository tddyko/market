import axios from "axios";
const state = () => ({
  Tab_Headers: [
    {
      Header: "전체",
    },
    {
      Header: "미답변",
    },
    {
      Header: "답변완료",
    },
  ],
  Tab: null,
  Reservation_List_Headers: [
    {text: '예약번호', align: 'center', sortable: false, value: 'reservation_id',},
    {text: '예약좌석명', value: 'reserve_seat', align: 'center'},
    {text: '예약날짜', value: 'reserve_date', align: 'center'},
    {text: '예약시간', value: 'reserve_time', align: 'center'},
    {text: '예약인원', value: 'order_count', align: 'center'},
    {text: '예약상태', value: 'current_state', align: 'center'},
  ],
  Reservation_List_Items:[],
  Reservation_Review: [],
  menu: null,
  menu2: false,
  dates: [],
});

const getters = {
  Get_Reserve_Review(state){
    return state.Reservation_Review;
  },
  Get_Reserve_Tab_Headers(state){
    return state.Tab_Headers;
  },
  Get_Reserve_List_Headers(state){
    console.log(state.Order_List_Headers)
    return state.Reservation_List_Headers;
  },
  Get_Reserve_List_Items(state){
    return state.Reservation_List_Items;
  },
  Get_Tab(state){
    return state.Tab;
  },
  Get_Menu(state){
    return state.menu;
  },
  Get_Menu2(state){
    return state.menu2;
  },
  Get_dates(state){
    return state.dates;
  },
};

const mutations = {
  set_Tab(state, tab) {
    state.Tab = tab;
  },
  Set_Menu(state, value){
    state.menu=value;
  },
  Update_Menu(state){
    state.menu= null;
  },
  Update_Menu2(state){
    if (state.dates.length === 2){
      state.menu2 = null;
    }
  },
  set_dates(state, value){
    state.dates = value;
  },
  set_date(state, value){
    state.date = value;
  },
  Set_Menu2(state, value){
    state.menu2=value;
  },
  Set_Reserve_List_Items(state, value){
    state.Reservation_List_Items = value;
  },
  Set_Reserve_Review_Items(state, value){
    state.Reservation_Review = null;
    state.Reservation_Review = value;
  },
};
const actions = {
  actReserve_Review_Items({commit},data){
    if(data.dates.length>1)
    axios({
      url : '/reseve_review/reviews/list',
      method : 'get',
      withCredentials : true,
      params : {
        date1 : data.dates[0],
        date2 : data.dates[1],
        tab : data.tabIndex
      }
    }).then((response)=>{
      response.data.forEach((element)=>{
        element.showRecoment = false;
      })
      console.log(response)
      commit('Set_Reserve_Review_Items',response.data)
    })
  },
  actReserve_List_Items({ commit },date){
    console.log("input date is " + date)
    axios({
      url : '/reservation/list',
      method : 'get',
      withCredentials : true,
      params : {
        dateValue : date,
      }
    }).then((response)=>{
      console.log(response.data)
      commit("Set_Reserve_List_Items", response.data);
    })
  },
  actReserve_Review_answers({commit},data){
    axios({
      url : `/reseve_review/recoment/${data.review_id}`,
      method : 'get',
      withCredentials : true,
      params : {
        answer : data.answer
      }
    }).then((response)=>{
      console.log(response)
    })
  },
};
export default { namespaced: true, state, getters, mutations, actions };
