<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.reserveDialog"
      fullscreen
      persistent
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
          <v-icon>mdi-clipboard-text</v-icon>
        </v-btn>
      </template>
      <reserve-card />
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "ReserveDialog",
  components: {
    ReserveCard: () => import('@/views/main/marketdetail/popup/reserve/ReserveCard')
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
