const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
};

const mutations = {
  setSignUpDialog(state, data) {
    state.signUp = data;
  },
};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
