<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.orderSelectDialog"
      :retain-focus="false"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="text-center"
          color="indigo"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          추가
        </v-btn>
      </template>
      <order-select />
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "OrderSelectDialog",
  components: {
    OrderSelect: () => import('@/views/main/marketdetail/popup/order/OrderSelect')
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
  }
}
</script>
<style scoped>
</style>
