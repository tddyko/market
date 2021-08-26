<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
      cols="12"
      align-self="center"
    >
      <ReservationReviewToolbar />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    ReservationReviewToolbar: () => import('@/views/market/reservation/Reservation-review/Reservation-toolbar')
  }
}
</script>

<style>
</style>
