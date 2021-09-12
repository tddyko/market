<template>
  <v-tabs-items v-model="tab">
    <Mypagecard />
    <MyPageOrderCard />
    <MyPageReserveCard />
  </v-tabs-items>
</template>

<script>
export default {
  name: "MyPageTabItems",
  components: {
    MyPageReserveCard: () => import('@/views/main/mypage/reserve/MyPageReserveCard'),
    MyPageOrderCard: () => import('@/views/main/mypage/order/MyPageOrderCard'),
    Mypagecard: () => import('@/views/main/mypage/info/MyPageCard')
  },
  computed: {
    tab:{
      get(){
        return this.$store.getters["mypage/getTab"]
      }
    }
  }
}
</script>

<style scoped>
</style>
