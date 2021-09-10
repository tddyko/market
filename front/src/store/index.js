import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import tab from "@/store/main/tab";
import items from "@/store/main/tabItems";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";
import market_modules from "@/store/market/Market_modules";
import market_list from "@/store/main/marketlist";
import market_detail from "@/store/main/marketdetail";
import dashboard from "@/store/market/DashBoard";
import menu from "@/store/market/menu";
import authentiCation from "@/store/authentication";
import marketSignup from "@/store/signup/market";
import memberSignup from "@/store/signup/member";
import mypage from "@/store/main/mypage";
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
    ...market_list,
    ...market_detail,
    ...dashboard,
    ...menu,
    ...authentiCation,
    ...marketSignup,
    ...memberSignup,
    ...mypage
  },
});

export default store;
