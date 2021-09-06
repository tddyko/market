import axios from "axios";
const state = () => ({
  //첫번째 줄
  Order_DashBoard: [
    {
      color: "cyan darken-3",
      title: "주문건수",
      subtitle: "당일 총 주문건...",
      subContent: "당일 총 주문건수: ",
      subContentValue: 300,
      labels: [],
      value: [],
    },
    {
      color: "cyan lighten-2",
      title: "주문완료",
      subtitle: "당일 총 주문완료건...",
      subContent: "당일 총 주문완료수: ",
      subContentValue: 300,
      labels: [],
      value: [],
    },
    {
      color: "orange accent-1",
      title: "주문취소",
      subtitle: "당일 총 주문취소건...",
      subContent: "당일 총 주문취소건수: ",
      subContentValue: 300,
      labels: [],
      value:[],
    }
  ],

  //두번 쨰 줄
  Reserve_DashBoard:[
    {
      color: "black",
      title: "예약건수",
      subtitle: "당일 총 예약건...",
      subContent: "당일 총 예약건수: ",
      subContentValue: 300,
      labels: [],
      value: [],
    },
    {
      color: "deep-orange accent-1",
      title: "예약완료",
      subtitle: "당일 총 예약완료건...",
      subContent: "당일 총 예약완료건수: ",
      subContentValue: 300,
      labels: [],
      value: [],
    },
    {
      color: "brown darken-1",
      title: "예약취소",
      subtitle: "당일 총 예약취소건...",
      subContent: "당일 총 예약취소건수: ",
      subContentValue: 300,
      labels: [], //시간
      value: [], //시간마다 값
    }
  ]
});
const getters = {
  get_Order_DashBoard : (state) => state.Order_DashBoard,
  get_Reserve_DashBoard : (state) => state.Reserve_DashBoard,

};

const mutations = {
  setValue(state,data) {
    let i=1;
    console.log(data[0].time);
    state.Order_DashBoard.forEach((element)=>{
      let sumValue=0;
      data[0].time.forEach((data)=>{
        element.labels.push(data.substring(11))
      })
        element.value = data[i].value;
        i++
    });
    state.Reserve_DashBoard.forEach((element)=>{
      data[0].time.forEach((data)=>{
        element.labels.push(data.substring(11))
      })
        element.value = data[i].value;
        i++
    })
  }
};
const actions = {
  actOrder_DashBoard({ commit }, value){
    axios({
      url: 'http://localhost/dashboard',
      method: 'get',
      withCredentials : true,
    }).then(async (response)=>{
      await commit("setValue",response.data)
    }).catch((error)=>{console.error(error);})
  }
};

export default { namespaced:true, state, getters, mutations, actions};
