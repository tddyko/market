const state = () => ({
  tabheader: [
    {
      testheader: "테스트1",
    },
    {
      testheader: "테스트2",
    },
    {
      testheader: "테스트3",
    },
  ],
});

const getters = {
  gettest() {
    return state.tabheader;
  },
};

export default { namespaced: true, state, getters };
