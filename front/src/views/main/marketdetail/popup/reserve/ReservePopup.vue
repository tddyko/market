<template>
  <reserve-dialog />
</template>
<script>
export default {
  name: 'ReservePopup',
  components: {
    ReserveDialog: () => import('@/views/main/marketdetail/popup/reserve/ReserveDialog')
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
