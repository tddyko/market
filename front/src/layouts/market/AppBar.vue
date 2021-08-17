<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>No Wait</v-toolbar-title>
    <v-spacer />
    <v-btn
      to="/login"
    >
      로그인
    </v-btn>
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
