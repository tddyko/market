import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/market";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    ...market,
    ...order,
    ...reservation,
    ...info
  }
})

export default store;
