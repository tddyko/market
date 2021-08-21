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
    <div>
      {{ $store.state.order.Tab }}
    </div>
  </v-tabs>
</template>

<script>
export default {
  name: "OrderReviewTabs",
  data() {
    return {
      Tab_Headers: this.$store.state.order.Tab_Headers,
    }
  },
  computed: {
    Tab: {
      get () {
        return this.$store.state.order.Tab
      },
      set (value) {
        this.$store.commit('order/setTab', value)
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
