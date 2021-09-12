import axios from 'axios'
const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
  login_switch: false,
  isHaveSession : null,
  userInfo : null
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
  getLoginSwitch: (state) => state.login_switch,
  getSession : (state) =>state.isHaveSession,
  getUserInfo : (state) => state.userInfo
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
  }
};

const actions = {
  actSession({commit},value){
    commit("setSession",value)
  },
  actUserInfo({commit},value){
    axios({
      url : 'http://localhost/users/storeInformation',
      method : 'get',
      withCredentials : 'true',
    }).then(async(res)=>{
    console.log(res.data)
      if(!res.data.message)
        commit("setUserInfo",res.data)
      else{
        axios({
          url : 'http://localhost/users/memberInformation',
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
