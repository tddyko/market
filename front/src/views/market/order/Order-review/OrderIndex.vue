<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
    >
      <OrderReviewToolbar />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    OrderReviewToolbar: () => import('@/views/market/order/Order-review/Order-review-toolbar')
  }
}
</script>

<style>
</style>
