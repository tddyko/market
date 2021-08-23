const state = () => ({
  week: [
    "첫재 주", "둘째 주","셋째 주","넷째 주"
  ],
  day: [
    "월요일", "화요일","수요일","목요일","금요일","토요일","일요일"
  ],
  Tab: null
})
const getters = {
  Get_Week() {
    return state.week;
  },
  Get_Day() {
    return state.day;
  },
  getTab(){
    return state.Tab;
  }
};

const mutations = {
  setTab(state, value){
    state.Tab = value;
  }
};

const actions = {};

export default {namespaced: true , state ,getters ,actions ,mutations}
