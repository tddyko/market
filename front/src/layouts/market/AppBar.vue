<template>
  <v-app-bar
    app
    color="white"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>
      <router-link to="/market">
        <v-img
          :src="require('@/assets/logo.png')"
          max-width="165"
          max-height="30"
          contain
        />
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-if="userInfo === null"
      icon
      to="/login"
    >
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <v-btn
      v-if="userInfo!==null"
      icon
      to="/"
      @click="logout"
    >
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
    <router-link to="/market/mypage">
      <v-avatar
        class="mx-2"
      >
        <img
          v-if="userInfo!==null"
          alt="John"
          :src="userInfo.profile_img"
        >
      </v-avatar>
    </router-link>
  </v-app-bar>
</template>

<script>
import axios from "axios";

export default {
  name: "MarketAppBar",
  computed: {
      drawer: {
        get() {
          return this.$store.getters['app/getDrawer'];
        },
        set(v) {
          return this.$store.dispatch('app/toggleDrawer', v)
        }
      },
    userInfo :{
      get(){
        return this.$store.getters["authentiCation/getMarketInfo"]
      },
    }
  },
  mounted() {
    this.$store.dispatch("authentiCation/actUserInfo")
  },
  methods : {
    logout(){
      axios({
        url : '/logout',
        method : 'post',
        withCredentials : true
      }).then(()=>{
        location.reload()
      })
    },

  }
}
</script>

<style scoped>

</style>
