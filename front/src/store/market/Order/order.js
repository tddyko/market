  
import axios from "axios"
const state = () => ({ //스테이츠가 data랑 비슷한 맥락이고
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
  Order_List_Headers: [
    {text: '주문번호', align: 'center', sortable: false, value: 'order_id',},
    { text: '주문시각', value: 'createdAt', align: 'center'},
    { text: '주문내역', value: 'Products.name', align: 'center'},
    { text: '주문건수', value: 'order_count',  align: 'center'},
    { text: '주문금액', value: 'price',  align: 'center'},
    { text: '주문상태', value: 'current_state', align: 'center'},
  ],
  Order_List_Items: [],
  Order_Review: [],
  menu: null,
  menu2: false,
  dates: [],
  date: new Date().toISOString().substring(0,10),
});

const getters = { //getters가 컴포트?
  Get_Order_Review(state){
    console.log("get_order_revie")
    console.log(state.Order_Review)
    return state.Order_Review;
  },
  Get_Order_Tab_Headers(state){
    return state.Tab_Headers;
  },
  Get_Order_List_Headers(state){
    console.log(state.Order_List_Headers)
    return state.Order_List_Headers;
  },
  Get_Order_List_Items(state){
    return state.Order_List_Items;
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
  Get_date(state){
    return state.date;
  },
};

const mutations = {
  set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
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
  //주문
  Set_Order_List_Items(state, value){
    state.Order_List_Items = value;
  },
  Set_Order_Review_Items(state, value){
    state.Order_Review = null;
    state.Order_Review = value;
  }, 
  
};
const actions = {
  actOrder_List_Items({ commit },date){
    console.log('update orderlist')
    axios({
      url : 'http://localhost/order/list',
      method : 'get',
      withCredentials : true,
      params : {
        dateValue : date,
      }
    }).then((response)=>{ 
      commit("Set_Order_List_Items", response.data);
    })
  },
  actOrder_Review_Items({commit},data){   
    if(data.dates.length>1)
    axios({
      url : 'http://localhost/order_review/reviews/list',
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
      commit('Set_Order_Review_Items',response.data)
    })
  },
  actOrder_Review_answers({commit},data){
    axios({
      url : `http://localhost/order_review/answer/${data.review_id}`,
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