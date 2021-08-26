import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import tab from "@/store/main/tab";
import items from "@/store/main/tabItems";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";
import market_modules from "@/store/market/Market_modules"
import main_market from "@/store/main/market"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...drawer,
    ...order,
    ...reservation,
    ...tab,
    ...items,
    ...market_modules,
    ...info,
    ...main_market
  },
})

export default store
