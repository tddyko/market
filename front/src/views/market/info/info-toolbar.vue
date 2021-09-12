<template>
  <v-toolbar
    class="rounded-t-xl"
    color="white"
    elevation="3"
    height="50px"
  >
    <InfoTabs />
  </v-toolbar>
</template>

<script>
export default {
  name: "InfoToolbar",
  components: {
    InfoTabs : () => import ("@/views/market/info/info-tabs")
  }
}
</script>

<style scoped>
</style>
