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
    MarketAppBar: () => import('./AppBar'),
    MarketDrawer: () => import('./Drawer'),
    MarketMain: () => import('./Content')
  },
  data: () => ({
    drawer: true,
  })
}
</script>

<style scoped>

</style>
