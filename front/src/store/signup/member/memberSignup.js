import axios from 'axios';
const state = () => ({

  memberInfo : null
});

const getters = {

  getMemberInfo: (state) =>state.memberInfo
};

const mutations = {

  setMemberInfo :(state,data) => state.memberInfo = data
};

const actions = {


  actMemberInfo : ({commit},value) =>{
    axios({
      url : 'http://localhost/users/memberInformation',
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    })
  }
};

export default { namespaced: true, state, getters, mutations, actions };
