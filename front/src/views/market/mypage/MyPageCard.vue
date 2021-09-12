<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        elevation="5"
        rounded="lg"
      >
        <div class="text-h4 text-center py-5 my-5">
          내 정보
        </div>
        <div>
          <my-page-info />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "MypageCard",
  components: {
    MyPageInfo: () => import('@/views/market/mypage/MyPageInfo')
  },
}
</script>
<style scoped>
</style>
