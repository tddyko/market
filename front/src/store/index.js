import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/market";
import order from "@/store/order/Order";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    ...market,
    ...order
  }
})

export default store
