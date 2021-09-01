<template>
  <v-toolbar
    color="white"
    height="auto"
    class="rounded-t-xl"
    elevation="3"
  >
    <v-row justify="start">
      <v-col>
        <InfoTabs />
      </v-col>
    </v-row>
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