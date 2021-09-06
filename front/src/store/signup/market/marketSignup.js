const state = () => ({
  marketSignupDialog: null,
});

const getters = {
  getMarketSignupDialog: (state) => state.marketSignupDialog,
};

const mutations = {
  setMarketSignupDialog(state, data) {
    state.marketSignupDialog = data;
  },
};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
