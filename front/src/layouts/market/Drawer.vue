<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <drawer-header />
    <v-divider />
    <market-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MarketDrawer",
  components: {
    MarketList: () => import('@/layouts/market/List'),
    DrawerHeader: () => import('@/layouts/market/DrawerHeader')
  },
  data: () => ({
    items: [
      {title: '대시보드', icon: 'mdi-view-dashboard', to: '/market'},
      {title: '주문관리', icon: 'mdi-clipboard-text', to: '/market/order'},
      {title: '예약관리', icon: 'mdi-account-multiple-outline', to: '/market/reservation'},
      {title: '주문내역2', icon: 'mdi-account-multiple-outline', to: '/market/order2'},
      {title: '로그인', icon: 'mdi-account-multiple-outline', to: '/login'},
    ],
  }),
}
</script>

<style scoped>

</style>
