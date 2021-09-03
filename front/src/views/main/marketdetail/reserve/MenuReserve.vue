<template>
  <v-container>
    <reserve-cards />
    <reserve-panel />
  </v-container>
</template>

<script>
export default {
  name: "MenuReserve",
  components: {
    ReservePanel: () => import('@/views/main/marketdetail/reserve/ReservePanel'),
    ReserveCards: () => import('@/views/main/marketdetail/reserve/ReserveCards')
  },
}
</script>

<style scoped>

</style>
