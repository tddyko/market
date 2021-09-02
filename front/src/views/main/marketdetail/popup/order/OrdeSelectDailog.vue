<template>
  <v-row justify="center">
    <v-dialog
      fullscreen
      hide-overlay
      :retain-focus="false"
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="indigo"
          outlined
          class="text-center"
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
