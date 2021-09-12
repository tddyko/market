<template>
  <div>
    <InfoMenucards />
    <option-button />
  </div>
</template>


<script>
import OptionButton from "@/views/market/info/Option+Button";
import InfoMenucards from "@/views/market/info/menu/Menu_cards";

export default {
  name: "MenuIndex",
  components: {InfoMenucards, OptionButton},
}
</script>

<style scoped>
</style>
