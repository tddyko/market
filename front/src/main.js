import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from '@/plugins/vuetify'
import './plugins'
import VueSession from 'vue-session'
import axios from 'axios'
Vue.prototype.$Axios = axios;
Vue.prototype.$routerPort = "http://localhost:3000/"
Vue.config.productionTip = false;

var sessionOptions = {
  persist: true
}


Vue.use(VueSession, sessionOptions)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
