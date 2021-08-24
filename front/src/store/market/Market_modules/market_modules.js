const state = () => ({
  menu: null,
  menu2: false,
  Tab: null,
  dates: [],
  date: new Date().toISOString().substring(0,10),
});

const mutations = {
  Set_Tab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Tab = tab;
  },
  Set_Menu(state, value) {
    state.menu = value;
  },
  Set_dates(state, value){
    state.dates = value;
  },
  Update_Menu(state) {
    state.menu = null;
  },
  Update_Menu2(state) {
    if (state.dates.length === 2) {
      state.menu2 = null;
    }
  },
  Set_date(state, value){
    state.date = value;
  }
};

const getters = {
  Get_Tab(state){
    return state.Tab;
  },
  Get_Menu(state){
    return state.menu;
  },
  Get_Menu2(state){
    return state.menu2;
  },
  Get_dates(state){
    return state.dates;
  },
  Get_date(state){
    return state.date;
  }
};

const actions = {
  test ({ commit }, value) {
    commit('Set_date', value)
  }
};



export default {namespaced: true, state, getters, mutations, actions};
