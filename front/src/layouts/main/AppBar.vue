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
            max-width="165"
            max-height="30"
            contain
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
        @click="logout"
      ></v-btn>
      <v-btn
        v-if="findSession === null"
        icon
        to="/login"
      >
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-avatar
        v-else
        color="primary"
        size="56"
      ></v-avatar>
      <template
        v-if="$route.name === 'Main'"
        #extension
      >
        <main-tab-bar />
      </template>
    </v-app-bar>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "MainAppBar",
  components: {
    MainTabBar: () => import('@/layouts/main/Tab')
  },
  data: () => ({
    expand: false,
  }),
  created() {
    console.log(this.$session.get('id'))

  },
  computed:{
    findSession:{
      get(){
        return  this.$store.getters["authentiCation/getSession"]
      },
      set(value){
        this.$store.dispatch("authentiCation/actSession", this.$session.get('id'))
      }
    }
  },
  methods:{
    logout(){
      axios({
        url : 'http://localhost/logout',
        method : 'post'
      }).then(()=>{
        this.$session.destroy();
        console.log(this.$session.get('id'))
      })
    }
  }
}
</script>

<style scoped>

</style>
