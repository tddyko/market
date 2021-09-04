<template>
  <div>
    <reserve-card />
    <option-button />
  </div>
</template>


<script>
import OptionButton from "@/views/market/info/Option+Button";
import ReserveCard from "@/views/market/info/reserve/Reserve_cards";
export default {
  name: "Reserveindex",
  components: {ReserveCard, OptionButton},
}
</script>

<style scoped>

</style>
