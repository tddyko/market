import axios from "axios";
const state = () => ({
  marketSignupDialog: null,
  idCheck: false,
  categories: [],
});

const getters = {
  getMarketSignupDialog: (state) => state.marketSignupDialog,
  getIdCheck: (state) => state.idCheck,
  getCategories: (state) => state.categories,
};

const mutations = {
  setMarketSignupDialog(state, data) {
    state.marketSignupDialog = data;
  },
  setIdCheck(state, value) {
    state.idCheck = value;
  },
  setCategories(state, value) {
    state.categories = value;
  },
};

const actions = {
  actIdCheck({ commit }, value) {
    axios({
      url: `/idCheck/${value}`,
      method: "get",
    }).then(async (res) => {
      if (res.data === true) alert("사용 가능한 아이디 입니다");
      else alert("사용 불가능한 아이디 입니다");
      commit("setIdCheck", res.data);
    });
  },
  actCategories({ commit }, value) {
    axios({
      url: "/markets/categorys/list",
      method: "get",
    }).then(async (res) => {
      commit("setCategories", res.data);
      console.log(res.data);
    });
  },
  signUp({ commit }, value) {
    let formData = new FormData();
    try {
      formData.append("userfile", value.userfile);
    } catch {}
    formData.append("id", value.id);
    formData.append("password", value.password);
    formData.append("name", value.name);
    formData.append("email", value.email);
    formData.append("market_name", value.market_name);
    formData.append("phonenumber", value.phonenumber);
    formData.append("zipcode", value.zipcode);
    formData.append("address", value.address);
    formData.append("dt_address", value.dt_address);
    formData.append("market_phone", value.market_phone);
    formData.append("category", value.category);
    axios
      .post(`/signup/${value.state}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async (res) => {})
      .catch((err) => console.log(err));
  },
};

export default { namespaced: true, state, getters, mutations, actions };
