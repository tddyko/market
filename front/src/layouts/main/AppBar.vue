<template>
  <v-container>
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            :src="require('@/assets/logo.png')"
            contain
            max-height="30"
            max-width="165"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="expand = !expand"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-expand-x-transition>
        <v-card
          v-show="expand"
          class="pa-2"
          color="transparent"
          elevation="0"
          width="600px"
        >
          <v-text-field
            clearable
            dense
            filled
            hide-details
            rounded
          />
        </v-card>
      </v-expand-x-transition>
      <v-btn
        v-if="userInfo === null"
        icon
        to="/login"
      >
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn
        v-if="userInfo !== null"
        icon
        @click="logout"
      >
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
      <router-link to="/mypage">
        <v-avatar
          v-if="userInfo !== null"
          class="mx-2"
        >
          <img
            :src="imgSrc(userInfo.profile_img)"
            alt="John"
          >
        </v-avatar>
      </router-link>
      <template
        v-if="$route.name === 'Main'"
        #extension
      >
        <main-tab-bar />
      </template>
      <template
        v-else-if="$route.name === 'mypage'"
        #extension
      >
        <mypagetab />
      </template>
    </v-app-bar>
  </v-container>
</template>
<script>
import Mypagetab from "@/views/main/mypage/MyPageTab";
import axios from "axios";
export default {
  name: "MainAppBar",
  components: {
    Mypagetab,
    MainTabBar: () => import('@/layouts/main/Tab')
  },
  data: () => ({
    expand: false,
  }),
  computed : {
    userInfo :{
      get(){
        console.log(this.$store.getters["authentiCation/getUserInfo"])
        return this.$store.getters["authentiCation/getUserInfo"]
      },
    }
  },
  created() {
    this.$store.dispatch("authentiCation/actUserInfo")
  },
  methods : {
    logout(){
      axios({
        url : '/api/logout',
        method : 'post',
        withCredentials : true
      }).then(()=>{
        location.reload()
      })
    },
    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return this.$routerPort + name;
    }
  }
}
</script>

<style scoped>
</style>
