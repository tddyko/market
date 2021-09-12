<template>
  <v-tab-item>
    <div class="text-h4 text-center py-5 my-5">
      내 정보
    </div>
    <div>
      <my-page-info />
    </div>
  </v-tab-item>
</template>

<script>
export default {
  name: "Mypagecard",
  components: {
    MyPageInfo: () => import('@/views/main/mypage/info/MyPageInfo')
},
}
</script>

<style scoped>
</style>
