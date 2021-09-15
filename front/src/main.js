import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import "./plugins";
import VueSession from "vue-session";
Vue.config.productionTip = false;

const sessionOptions = {
  persist: true,
};

Vue.use(VueSession, sessionOptions);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
