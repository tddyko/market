<template>
  <div>
    <v-toolbar
      class="rounded-t-xl"
      color="white"
      height="auto"
    >
      <v-row
        align="center"
        justify="space-between"
      >
        <v-col
          cols="12"
          lg="4"
          md="4"
          sm="3"
          xl="3"
        >
          <ReservationReviewDatepicker />
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="6"
          xl="6"
        >
          <ReservationReviewTabs />
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card class="rounded-xl">
      <ReservationReviewTabsItems />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ReservationReviewToolbar",
  components: {
    ReservationReviewTabs: () => import('@/views/market/reservation/Reservation-review/Reservation-tabs'),
    ReservationReviewTabsItems: () => import('@/views/market/reservation/Reservation-review/Reservation-tabs-items'),
    ReservationReviewDatepicker: () => import('@/views/market/reservation/Reservation-review/Reservation-datepicker'),
  },
}
</script>

<style scoped>

</style>
