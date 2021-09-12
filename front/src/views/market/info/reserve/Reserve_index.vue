<template>
  <div>
    <reserve-card />
    <option-button />
  </div>
</template>


<script>
export default {
  name: "Reserveindex",
  components: {
    ReserveCard: () => import('@/views/market/info/reserve/Reserve_cards'),
    OptionButton: () => import('@/views/market/info/Option+Button')
  },
}
</script>

<style scoped>
</style>
