import Vue from "vue";
import Vuex from "vuex";
import market from "@/store/market";
import order from "@/store/main/Order";
import reservation from "@/store/main/Reservation";
import info from "@/store/main/Info";

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
