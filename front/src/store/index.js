import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/modules/market";
import order from "@/store/modules/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...market,
    ...order,
  },
});

export default store;
