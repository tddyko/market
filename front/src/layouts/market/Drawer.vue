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
      {title: '주문관리', icon: 'mdi-clipboard-text', items:[
          {title: '주문내역', icon: 'mdi-clipboard-text', to: '/market/order'},
          {title: '리뷰관리', icon: 'mdi-clipboard-text'}
        ]},
      {title: '예약관리', icon: 'mdi-account-multiple-outline', items:[
          {title: '주문내역', icon: 'mdi-clipboard-text', to: '/market/reservation'},
          {title: '리뷰관리', icon: 'mdi-clipboard-text'}
        ]},
      {title: '기본정보', icon: 'mdi-clipboard-text'}
    ],
  }),
}
</script>

<style scoped>

</style>
