<template>
  <v-dialog
    v-model="getFloating.order_floationg"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <mypageorderdialogcard />
  </v-dialog>
</template>

<script>
import Mypageorderdialogcard from "@/views/main/mypage/order/my_page_order_dialog_card";
export default {
  name: "MyPageOrderDialog",
  components: {Mypageorderdialogcard},
  computed: {
    getFloating() {
      return this.$store.getters["mypage/getFloating"]
    }
  }
}
</script>

<style scoped>
</style>
