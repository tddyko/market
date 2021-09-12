<template>
  <v-dialog
    v-model="getFloating.reserve_floationg"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <MypageReserveDialogCard />
  </v-dialog>
</template>

<script>
export default {
  name: "MyPageReserveDialog",
  components: {
    MypageReserveDialogCard: () => import('@/views/main/mypage/reserve/MyPageReserveDialogCard')
},
  computed: {
    getFloating() {
      return this.$store.getters["mypage/getFloating"]
    }
  }
}
</script>

<style scoped>
</style>
