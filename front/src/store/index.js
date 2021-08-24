import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/market";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";
import market_modules from "@/store/market/Market_modules"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    ...market,
    ...order,
    ...reservation,
    ...info,
    ...market_modules
  }
})

export default store;
