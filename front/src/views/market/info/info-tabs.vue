<template>
  <v-tabs
    v-model="Tab"
    slider-color="light-blue"
    centered
    show-arrows
    grow
    class="pa-0 ma-0"
  >
    <v-tab
      v-for="(tab, index) in Get_Tab_Headers"
      :key="index"
      class="font-weight-regular text--white"
      :class="`text-${tap_size}`"
    >
      {{ tab.Header }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "InfoTabs",
  computed: {
    Tab: {
      set(value) {
        this.$store.dispatch("info/Info_Set_Tab_Actions", value)
      },
      get() {
        return this.$store.getters['info/Get_Info_Tab']
      }
    },
    Get_Tab_Headers() {
      return this.$store.getters["info/Get_Tab_Headers"]
    },
    tap_size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-h6'
        case 'md':
          return 'md-h6'
        case 'lg':
          return 'lg-h6'
        case 'xl':
          return 'xl-h6'
        default :
          return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
