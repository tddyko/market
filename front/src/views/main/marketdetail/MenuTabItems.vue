<template>
  <v-tabs-items
    v-model="tabs"
  >
    <!-- 메뉴 탭 -->
    <v-tab-item>
      <menu-order />
    </v-tab-item>
    <!-- 예약 탭 -->
    <v-tab-item>
      <menu-reserve />
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  name: "MenuTabItems",
  components: {
    MenuReserve: () => import('@/views/main/marketdetail/MenuReserve'),
    MenuOrder: () => import('@/views/main/marketdetail/MenuOrder')
  },
  computed: {
    tabs: {
      get() {
        return this.$store.getters["marketDetail/getTabs"]
      }
    }
  }
}
</script>

<style scoped>

</style>
