import axios from "axios";
const state = () => ({
  //여러 컴포넌트에 공유되는 데이터
  select: ["추천순", "ㅇㅇ순"],
  cards: [],
});

const getters = {
  //연산된 state 값을 접근하는 속성 computed() 처럼 미리 연산된 값을 접근하는 속성
  getCards: (state) => state.cards,
  getSelect: (state) => state.select,
};

const mutations = {
  //state 값을 변경하는 이벤트 로직 ,메소드 methods
  //
  setCards(state, data) {
    state.cards = data;
  },
  setSelect(state, data) {
    state.select = data;
  },
};

const actions = {
  //비동기 처리 로직을 선언하는 메소드 async methods
  actCards({ commit },value) {
    console.log('actCards가 호출됨')
    axios({
      url: `http://localhost/markets/${value}`,
      method : 'get',
      headers: {},
      withCredentials: true, //쿠키가 서로 저장
    }).then((response) => {
      commit("setCards", response.data);
    })
  },
  actSelect({ commit }, value) {
    commit("setSelect", value);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
