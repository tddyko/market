const state = () => ({
  select: ["추천순", "ㅇㅇ순"],
  cards: [
    {
      title: "Favorite road trips",
      src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      flex: 6,
    },
  ],
});

const getters = {
  getCards: (state) => state.cards,
  getSelect: (state) => state.select,
};

const mutations = {
  setCards(state, data) {
    state.cards = data;
  },
  setSelect(state, data) {
    state.select = data;
  },
};

const actions = {
  actCards({ commit }, value) {
    commit("setCards", value);
  },
  actSelect({ commit }, value) {
    commit("setSelect", value);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
