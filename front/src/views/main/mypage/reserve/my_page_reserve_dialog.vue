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
import MypageReserveDialogCard from "@/views/main/mypage/reserve/my_page_reserve_dialog_card";
export default {
  name: "MyPageReserveDialog",
  components: {MypageReserveDialogCard},
  computed: {
    getFloating() {
      return this.$store.getters["mypage/getFloating"]
    }
  }
}
</script>

<style scoped>
</style>
