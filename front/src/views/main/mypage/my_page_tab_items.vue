<template>
  <v-tabs-items v-model="tab">
    <Mypagecard />
    <MyPageOrderCard />
    <MyPageReserveCard />
  </v-tabs-items>
</template>

<script>
import Mypagecard from "@/views/main/mypage/info/my_page_card";
import MyPageOrderCard from "@/views/main/mypage/order/my_page_order_card";
import MyPageReserveCard from "@/views/main/mypage/reserve/my_page_reserve_card";
export default {
  name: "MyPageTabItems",
  components: {MyPageReserveCard, MyPageOrderCard, Mypagecard},
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
