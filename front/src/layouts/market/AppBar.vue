<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="$emit('drawer')" />
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
  name: "MarketAppBar"
}
</script>

<style scoped>

</style>
