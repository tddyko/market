const state = () => ({
  week: [
    "첫재 주", "둘째 주","셋째 주","넷째 주"
  ],
  day: [
    "월요일", "화요일","수요일","목요일","금요일","토요일","일요일"
  ],
  Tab: null,
  Tab_Headers: [
    {
      Header: "운영정보",
    },
    {
      Header: "공지사항",
    },
  ],
  Close_Time: null,
  Open_Time: null,
  Open_Time_Menu: false,
  Close_Time_Menu: false,
})
const getters = {
  Get_Info_Tab(state) {
    return state
  },
  Get_Week(state) {
    return state.week;
  },
  Get_Day(state) {
    return state.day;
  },
  Get_Tab(state){
    return state.Tab;
  },
  Get_Tab_Headers(state){
    return state.Tab_Headers;
  },
  Get_Open_Time(state){
    return state.Open_Time;
  },
  Get_Close_Time(state){
    return state.Close_Time;
  },
  Get_Open_Time_Menu(state){
    return state.Open_Time_Menu;
  },
  Get_Close_Time_Menu(state){
    return state.Close_Time_Menu;
  }
};

const mutations = {
  Set_Info_Tab(state, value){
    state.Tab = value;
  },
  Set_Open_Time(state, value){
    state.Open_Time = value;
  },
  Set_Close_Time(state, value){
    state.Close_Time = value;
  },
  Set_Open_Time_Menu(state, value){
    state.Open_Time_Menu = value;
  },
  Set_Close_Time_Menu(state, value){
    state.Close_Time_Menu = value;
  }
};

const actions = {
  Info_Set_Tab_Actions({commit}, value){
    commit("Set_Info_Tab", value);
  },
  Info_Set_Open_Time_Actions({commit}, value){
    commit("Set_Open_Time", value);
  },
  Info_Set_Close_Time_Actions({commit}, value){
    commit("Set_Close_Time", value);
  },
  Info_Set_Open_Time_Menu({commit}, value){
    commit("Set_Open_Time_Menu", value)
  },
  Info_Set_Close_Time_Menu({commit}, value){
    commit("Set_Close_Time_Menu", value)
  }
};

export default {namespaced: true , state ,getters ,actions ,mutations}
