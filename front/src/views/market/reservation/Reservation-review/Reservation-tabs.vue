<template>
  <v-tabs
    v-model="Tab"
    slider-color="light-blue"
    centered
    grow
  >
    <v-tab
      v-for="Tabs in Tab_Headers"
      :key="Tabs.Header"
      class="font-weight-regular text--white"
      :class="`text-${Tap_Size}`"
    >
      {{ Tabs.Header }}
    </v-tab>
  </v-tabs>
</template>

<script>

export default {
  name: "ReservationReviewTabs",
  data() {
    return {
      Tab_Headers: this.$store.state.reservation.Tab_Headers,
    }
  },
  computed: {
    
    Tab: {
      get () {
        let inputData = new Object();
        inputData.dates = this.$store.getters["market_modules/Reservation_Get_dates"] 
        inputData.tabIndex = this.$store.getters["market_modules/Reservation_Get_Tab"]
        this.$store.dispatch("reservation/actReserve_Review_Items",inputData)
        return this.$store.getters['market_modules/Reservation_Get_Tab']
      },
      set (value) {
        this.$store.dispatch('market_modules/Reservation_Set_Tab_Actions', value)
      }
    },
    Tap_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return 'md-h6'
        case 'lg':
          return 'lg-h6'
        case 'xl':
          return 'xl-h6'
        default :
          return ''
      }
    },
  }
}
</script>

<style scoped>

</style>
