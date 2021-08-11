<template>
<v-app>
  <market-app-bar @drawer="drawer = !drawer" />
  <market-drawer v-model="drawer" />
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
    drawer: true,
  }),
}
</script>

<style scoped>

</style>
