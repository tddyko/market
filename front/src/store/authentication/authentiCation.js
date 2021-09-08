const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
  login_switch: false,
  session : null
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
  getLoginSwitch: (state) => state.login_switch,
  getSession : (state) =>state.session
};

const mutations = {
  setSignUpDialog(state, data) {
    state.signUp = data;
  },
  setLoginSwitch(state, data) {
    state.login_switch = data;
  },
  setSession(state,data){
    state.session = data
  }

};

const actions = {
  actSession({commit},value){
    commit("setSession",value)
  }

};

export default { namespaced: true, state, getters, mutations, actions };
