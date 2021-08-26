<template>
  <v-row
    justify="center"
    class="mt-10"
  >
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
      cols="12"
      align-self="center"
    >
      <v-card class="rounded-xl">
        <ReservationPanel />
        <ReservationList />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Reservation',         //컴포넌트 이름
  components: {
    ReservationPanel: () => import('@/views/market/reservation/Reservation-history/Reservation-expansion-panel'),
    ReservationList: () => import('@/views/market/reservation/Reservation-history/Reservation-list'),
  },
  data(){
    return{
    }
  }
}
</script>

<style>
</style>
