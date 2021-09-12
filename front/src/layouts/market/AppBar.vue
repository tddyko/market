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
          contain
          max-height="30"
          max-width="165"
        />
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      icon
      to="/login"
    >
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <router-link to="/market/mypage">
      <v-avatar
        class="mx-2"
      >
        <img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        >
      </v-avatar>
    </router-link>
  </v-app-bar>
</template>

<script>
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
      }
  }
}
</script>

<style scoped>

</style>
