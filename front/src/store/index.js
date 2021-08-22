import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import order from "@/store/market/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...drawer,
    ...order,
  },
});

export default store;
