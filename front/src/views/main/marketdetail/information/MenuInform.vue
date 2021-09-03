<template>
  <!-- 정보 탭 -->
  <v-container>
    <noti-card />
    <info-card />
  </v-container>
</template>

<script>
export default {
  name: "MenuInform",
  components: {
    InfoCard: () => import('@/views/main/marketdetail/information/InfoCard'),
    NotiCard: () => import('@/views/main/marketdetail/information/NotiCard')
  }
}
</script>

<style scoped>
</style>