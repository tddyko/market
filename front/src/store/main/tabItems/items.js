const state = () => ({
  tabItems: [
    
  ],
});

const getters = {
  getTabItems: (state) => state.tabItems,
};

const mutations = {
  setTabItems(state, data) {
    state.tabItems = data;
  },
};

const actions = {
  actTabItems({ commit }, v) {
    commit("setTabItems", v);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
