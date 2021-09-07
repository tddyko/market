const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
  login_switch: false
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
  getLoginSwitch: (state) => state.login_switch
};

const mutations = {
  setSignUpDialog(state, data) {
    state.signUp = data;
  },
  setLoginSwitch(state, data) {
    state.login_switch = data;
  }
};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
