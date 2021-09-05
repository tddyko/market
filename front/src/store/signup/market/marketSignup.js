const state = () => ({
  marketSignupDialog: null,

  marketSignupValidation: [
    { id: null },
    { passwd: null },
    { pwd_check1: null },
    { pwd_check2: null },
    { pwd_validate: null },
  ],
});

const getters = {
  getMarketSignupDialog: (state) => state.marketSignupDialog,
  getMarketSignupValidation: (state) => state.marketSignupValidation,
};

const mutations = {
  setMarketSignupDialog(state, data) {
    state.marketSignupDialog = data;
  },
  setMarketSignupValidation(state, data) {
    state.marketSignupValidation = data;
  },
};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
