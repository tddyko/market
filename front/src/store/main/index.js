import Vue from "vue";
import Vuex from "vuex";
import tab from "@/store/main/tab";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...tab,
  },
});

export default store;
