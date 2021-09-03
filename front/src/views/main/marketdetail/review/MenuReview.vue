<template>
  <v-container>
    <rating-cards />
    <v-spacer />
    <review-cards />
  </v-container>
</template>
<script>
export default {
  name: "MenuReview",
  components: {
    ReviewCards: () => import('@/views/main/marketdetail/review/ReviewCards'),
    RatingCards: () => import('@/views/main/marketdetail/review/RatingCards')
  }
}
</script>
<style scoped>
</style>
