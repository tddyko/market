<template>
  <v-toolbar
    color="white"
    height="50px"
    class="rounded-t-xl"
    elevation="3"
  >
    <InfoTabs />
  </v-toolbar>
</template>

<script>
export default {
  name: "InfoToolbar",
  components:{
    InfoTabs : () => import ("@/views/market/info/info-tabs")
  }
}
</script>

<style scoped>
</style>
