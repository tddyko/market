const state = () => ({
  tabheader: [
    {
      testheader: "전체",
    },
    {
      testheader: "미답변",
    },
    {
      testheader: "답변완료",
    },
  ],
});

const getters = {
  gettest() {
    return state.tabheader;
  },
};

export default { namespaced: true, state, getters };
