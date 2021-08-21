<template>
  <v-row
    justify="center"
    class="mt-10"
  >
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
      cols="12"
      align-self="center"
    >
      <v-card class="rounded-xl">
        <OrderExpansionPanel />
        <OrderList />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Order',         //컴포넌트 이름
  components: {
    OrderExpansionPanel: () => import('@/views/market/order/Order_history/Order-expansion-panel'),
    OrderList: () => import('@/views/market/order/Order_history/Order-list'),
  },
  data(){
    return{
    }
  }
}
</script>

<style>
</style>
