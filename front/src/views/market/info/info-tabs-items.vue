<template>
  <div>
    <v-tabs-items
      v-model="get"
    >
      <InfoItemOperational />
      <InfoItemNotice />
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "InfoTabsItems",
  components: {
    InfoItemOperational : () => import("@/views/market/info/info-item-operational"),
    InfoItemNotice : () => import("@/views/market/info/info-item-notice")
  },
  computed: {
    get() {
      return this.$store.getters["info/Get_Tab"]
    }
  }
}
</script>

<style scoped>

</style>
