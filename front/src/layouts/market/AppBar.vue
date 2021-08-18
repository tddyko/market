<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="$emit('drawer')" />
    <v-toolbar-title>No Wait</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "MarketAppBar"
}
</script>

<style scoped>

</style>
