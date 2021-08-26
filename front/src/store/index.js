import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import order from "@/store/market/order";
import tab from "@/store/main/tab";
import items from "@/store/main/tabItems";
import market from "@/store/main/market";
import market from "@/store/market";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";
import market_modules from "@/store/market/Market_modules"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...drawer,
    ...order,
    ...reservation,
    ...tab,
    ...items,
    ...market,
    ...market_modules
    ...info,
  },
})

export default store
