import axios from 'axios'
const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
  login_switch: false,
  isHaveSession : null,
  userInfo : null,
  marketInfo : null
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
  getLoginSwitch: (state) => state.login_switch,
  getSession : (state) =>state.isHaveSession,
  getUserInfo : (state) => state.userInfo,
  getMarketInfo : (state) => state.marketInfo,
};

const mutations = {
  setSignUpDialog(state, data) {
    state.signUp = data;
  },
  setLoginSwitch(state, data) {
    state.login_switch = data;
  },
  setSession(state,data){
    state.isHaveSession = data
  },
  setUserInfo(state,data){
    state.userInfo = data
  },
  setMarketInfo(state,data){
    state.marketInfo = data
  }
};

const actions = {
  actSession({commit},value){
    commit("setSession",value)
  },
  actUserInfo({commit},value){
    axios({
      url : '/users/storeInformation',
      method : 'get',
      withCredentials : true,
    }).then(async(res)=>{

      if(!res.data.message)
        await commit("setMarketInfo",res.data)
      else{
        axios({
          url : '/users/memberInformation',
          method : 'get',
           withCredentials : true,
          }).then(async(res)=>{
            if(!res.data.message)
            commit("setUserInfo",res.data)
        })
      }
    })
  }
};
export default { namespaced: true, state, getters, mutations, actions };
