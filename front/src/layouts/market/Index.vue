<template>
  <v-app>
    <market-app-bar />
    <market-drawer />
    <market-main />
  </v-app>
</template>

<script>
export default {
  name: "MarketBase",
  components: {
    MarketAppBar: () => import('@/layouts/market/AppBar'),
    MarketDrawer: () => import('@/layouts/market/Drawer'),
    MarketMain: () => import('@/layouts/market/Content')
  },
  data: () => ({
  }),
}
</script>

<style scoped>

</style>
