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
          <v-badge
            color="red"
            content="6"
          >
            <v-icon>mdi-cart-variant</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <order-cart />
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "OrderDialog",
  components: {
    OrderCart: () => import('@/views/main/marketdetail/popup/order/OrderCart')
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
