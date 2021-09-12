<template>
  <div>
    <InfoMenucards />
    <option-button />
  </div>
</template>


<script>

export default {
  name: "MenuIndex",
  components: {
    InfoMenucards: () => import('@/views/market/info/menu/Menu_cards'),
    OptionButton: () => import('@/views/market/info/Option+Button')
  },
}
</script>

<style scoped>
</style>
