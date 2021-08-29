<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.orderDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          bottom
          color="primary"
          dark
          fab
          fixed
          right
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cart-variant</v-icon>
        </v-btn>
      </template>
      <order-card />
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "OrderDialog",
  components: {
    OrderCard: () => import('@/views/main/marketdetail/popup/order/OrderCard')
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>

<style scoped>

</style>
