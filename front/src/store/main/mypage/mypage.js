import axios from 'axios'
import router from '../../../router'
const state = () => ({
  tab: [],
  tab_title: [
    {tab_title: "내정보" },
    {tab_title: "주문내역" },
    {tab_title: "예약내역" }
  ],
  floating:{
    order_floationg : false,
    reserve_floationg : false
  },
  orderList : null,
  review : null,
  reviewRating : 0,
  reviewImg : [],
  orderInfo : {
    orderId : null,
    market_name : null
  },
  reserveList : null,
  changeData : {
    profile_img : null,
    password : null,
    nickname : null,
    nicknameCheck : false
  },
});

const getters = {
  getTab: (state) => state.tab,
  getTab_Title: (state) => state.tab_title,
  getFloating:(state) => state.floating,
  getOrderList : (state)=> state.orderList,
  getOrderInfo: (state)=> state.orderInfo,
  getReviewImg : (state)=> state.reviewImg,
  getReviewRating : (state)=> state.reviewRating,
  getReview : (state)=> state.review,
  getReserveList : (state)=>state.reserveList,
  getChangeData : (state) => state.changeData
};

const mutations = {
  setTab: (state,value) => {state.tab = value},
  setOrderDialog: (state) => {
      state.floating.order_floationg = !state.floating.order_floationg
  },
  setReserveDialog: (state) => {
    state.floating.reserve_floationg = !state.floating.reserve_floationg
  },
  setOrderList : (state,value) =>{
    state.orderList = value
  },
  setOrderInfo(state,value){
    state.orderInfo.orderId = value.orderId
    state.orderInfo.market_name = value.market_name
  },
  setReviewImg(state,value){
    state.reviewImg = value
  },
  setReviewRating(state,value){
    state.reviewRating = value
  },
  setReview : (state,value) => state.review = value,
  setMarket_name : (state,value) => state.market_name = value,
  setReserveList : (state,value) => state.reserveList = value,
  setChangeData : (state,value)=> state.changeData = value
};

const actions = {
  actOrderDialog: ({commit},value) => {
    commit("setOrderDialog");
    commit("setOrderInfo",value)
  },
  actReserveDialog: ({commit},value) => {
    commit("setReserveDialog");
    commit("setOrderInfo",value)
  },
  actTab: ({commit},value) => {
    commit("setTab",value);
  },
  actOrderList({commit},value){
    axios({
      url : 'http://localhost/order/member_list',
      method : 'get',
      withCredentials: true,
    }).then(async(res)=>{
     commit("setOrderList",res.data)
    })
  },
  actWriteReview({getters},value){
    let formData = new FormData();
    let orderInfo = getters.getOrderInfo
    if(getters.getReviewImg.length>0 && value === 'order_review')
        for(const index in getters.getReviewImg)
          formData.append("orderReviewImg", getters.getReviewImg[index])

    if(getters.getReviewImg.length>0 && value === 'reseve_review')
       for(const index in getters.getReviewImg)
        formData.append("reserve_reviewImg", getters.getReviewImg[index])
    formData.append('review',getters.getReview)
    formData.append('rating',getters.getReviewRating)
    axios.post(`http://localhost/${value}/${orderInfo.market_name}/${orderInfo.orderId}`,formData,{
          withCredentials: true,
          headers : {'Content-Type': 'multipart/form-data'}
        }).then((res)=>{
          if(res.data.message)
          alert('작성이 완료 되었습니다.')
          }
        ).catch((err)=>console.log(err))
  },
  actReserveList({commit},value){
      axios({
        url : 'http://localhost/reservation/myReserve',
        method : 'get',
        withCredentials: true,
      }).then(async(res)=>{
       commit("setReserveList",res.data)
      })
  },
  actChangeMemberInfo({commit},value){
  if(value.checkNickName ===false && value.nickname!==null)
    alert('닉네임 중복 확인을 해주세요')
   let formData = new FormData()
   try{
    formData.append('userfile', value.profile_img)
   }catch{}
   formData.append('nickname', value.nickname)
   formData.append('password',value.password)
    axios.post('http://localhost/users/memberInformation/update',formData,{
      withCredentials : true,
      headers : {'Content-Type': 'multipart/form-data'}
    }).catch((err)=>{console.log(err)})
  },
  checkNickName({getters},value){
  if(getters.getChangeData.nickname!==null)
    axios({
      url : `http://localhost/users/checkNickName/${getters.getChangeData.nickname}`,
      method : 'get',
      withCredentials : true
    }).then(async(res)=>{
      getters.getChangeData.checkNickName = res.data
        if(res.data === true)
        alert('사용 가능한 닉네임 입니다')
        else
        alert('사용 불가능한 닉네임 입니다')
      }
    )
  },
   checkMarketName({getters},value){
    if(getters.getChangeData.nickname!==null)
      axios({
        url : `http://localhost/users/checkMarketName/${getters.getChangeData.nickname}`,
        method : 'get',
        withCredentials : true
      }).then(async(res)=>{
        getters.getChangeData.checkNickName = res.data
          if(res.data === true)
          alert('사용 가능한 닉네임 입니다')
          else
          alert('사용 불가능한 닉네임 입니다')
        }
      )
    },
   actChangeMarketInfo({commit},value){
      if(value.checkNickName ===false && value.nickname!==null)
        alert('닉네임 중복 확인을 해주세요')
      axios({
        method:'post',
        url : 'http://localhost/users/marketInformation/update',
        withCredentials : true,
        data : {
          market_name : value.nickname,
          password : value.password
        }
      })
  },
};

export default { namespaced: true, state, getters, mutations, actions };
