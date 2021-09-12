<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        rounded="lg"
        elevation="5"
      >
        <MyPageTabItems />
      </v-card>
    </v-col>
    <my-page-order-dialog />
    <MyPageReserveDialog />
  </v-row>
</template>

<script>
import MyPageTabItems from "@/views/main/mypage/my_page_tab_items";
import MyPageOrderDialog from "@/views/main/mypage/order/my_page_order_dialog";
import MyPageReserveDialog from "@/views/main/mypage/reserve/my_page_reserve_dialog";
export default {
  name: "Mypageindex",
  components: {MyPageReserveDialog, MyPageOrderDialog, MyPageTabItems}
}
</script>

<style scoped>

</style>
