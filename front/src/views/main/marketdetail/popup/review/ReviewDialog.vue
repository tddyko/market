<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.reviewDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          bottom
          color="primary"
          dark
          fab
          fixed
          right
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-comment-processing</v-icon>
        </v-btn>
      </template>
      <review-card />
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ReviewDialog",
  components: {
    ReviewCard: () => import('@/views/main/marketdetail/popup/review/ReviewCard')
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>

<style scoped>

</style>
