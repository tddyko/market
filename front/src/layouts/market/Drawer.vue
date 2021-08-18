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
    drawer: null,
    items: [
      {title: '대시보드', icon: 'mdi-view-dashboard', to: '/market'},
      {title: '주문관리', icon: 'mdi-clipboard-text', items: [
          {title: '주문내역',  to: '/market/order'},
          {title: '주문관리',  to: '/market/order/test'},
        ]
      },
      {title: '예약관리', icon: 'mdi-account-multiple-outline',  to: '/market/reservate', items: [
          {title: '예약내역',  to: '/market/reservation'},
          {title: '리뷰관리',  to: '/market/reservation/reservationreview'},
        ]},
      {title: '기본정보', icon: 'mdi-information', to: '/market/defaultinfo'}
    ],
  }),
}
</script>

<style scoped>

</style>
