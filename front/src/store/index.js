import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import order from "@/store/market/order";
import tab from "@/store/main/tab";
import items from "@/store/main/tabItems";
import market from "@/store/main/market";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...drawer,
    ...order,
    ...tab,
    ...items,
    ...market,
  },
});

export default store;
