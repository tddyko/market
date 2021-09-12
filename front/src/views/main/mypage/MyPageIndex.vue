<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        elevation="5"
        rounded="lg"
      >
        <MyPageTabItems />
      </v-card>
    </v-col>
    <my-page-order-dialog />
    <MyPageReserveDialog />
  </v-row>
</template>

<script>
export default {
  name: "MyPageIndex",
  components: {
    MyPageReserveDialog: () => import('@/views/main/mypage/reserve/MyPageReserveDialog'),
    MyPageOrderDialog: () => import('@/views/main/mypage/order/MyPageOrderDialog'),
    MyPageTabItems: () => import('@/views/main/mypage/MyPageTabItems')
  }
}
</script>

<style scoped>

</style>
