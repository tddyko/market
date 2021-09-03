<template>
  <v-container>
    <order-chips />
    <menu-cards />
  </v-container>
</template>

<script>
export default {
  name: "MenuOrder",
  components: {
    MenuCards: () => import('@/views/main/marketdetail/order/OrderCards'),
    OrderChips: () => import('@/views/main/marketdetail/order/OrderChips')
  },
}
</script>

<style scoped>

</style>
