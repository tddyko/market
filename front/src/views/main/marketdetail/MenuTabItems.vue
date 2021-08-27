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
    <v-tab-item>
      <menu-review />
    </v-tab-item>
    <v-tab-item>
      <menu-inform />
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  name: "MenuTabItems",
  components: {
    MenuInform: () => import('@/views/main/marketdetail/MenuInform'),
    MenuReview: () => import('@/views/main/marketdetail/MenuReview'),
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
