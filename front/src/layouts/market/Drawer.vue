<template>
  <v-navigation-drawer
    v-model="drawer"
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
      {title: '기본정보', icon: 'mdi-account-multiple-outline', to: '/market/basic'},
      {title: '기본정보2', icon: 'mdi-account-multiple-outline', to: '/market/basic2'},
      {title: '주문내역2', icon: 'mdi-account-multiple-outline', to: '/market/order2'},
      {title: '로그인', icon: 'mdi-account-multiple-outline', to: '/login'},
      {title: '예약관리2', icon: 'mdi-account-multiple-outline', items: [
          {title: '리뷰관리', icon: 'mdi-account-multiple-outline', to: '/market/reservation1'},
          {title: '예약내역', icon: 'mdi-account-multiple-outline', to: '/market/reservation2'},

        ]},
    ],
  }),
}
</script>

<style scoped>

</style>
