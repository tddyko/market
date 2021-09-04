const state = () => ({
  marketSignupDialog: false,

  marketSignupValidation: [
    { id: null },
    { passwd: null },
    { pwd_check1: false },
    { pwd_check2: false },
    { pwd_validate: false },
  ],
});

const getters = {
  getMarketSignupDialog: (state) => state.marketSignupDialog,
  getMarketSignupValidation: (state) => state.marketSignupValidation,
};

const mutations = {};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
