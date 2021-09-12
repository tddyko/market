<template>
  <v-tab-item>
    <div class="text-h4 text-center py-5 my-5">
      내 정보
    </div>
    <div>
      <mypageform />
    </div>
  </v-tab-item>
</template>

<script>
import Mypageform from "@/views/main/mypage/info/my_page_info";
export default {
  name: "Mypagecard",
  components: {Mypageform},
}
</script>

<style scoped>
</style>
