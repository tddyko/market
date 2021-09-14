import axios from "axios";
const state = () => ({
  select: [],
  cards: [],
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
    console.log("actCards가 호출됨");
    axios({
      url: `http://localhost/markets/${value}`,
      method: "get",
      headers: {},
      withCredentials: true,
    }).then((response) => {
      commit("setCards", response.data);
    });
  },
  actSelect({ commit }, value) {
    commit("setSelect", value);
  },
};
export default { namespaced: true, state, getters, mutations, actions };
