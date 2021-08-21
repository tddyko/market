import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/market";
import order from "@/store/main/Order";
import reservation from "@/store/main/Reservation";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    ...market,
    ...order,
    ...reservation
  }
})

export default store;
