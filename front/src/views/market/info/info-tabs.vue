<template>
  <v-tabs
    v-model="Tab"
    slider-color="light-blue"
    centered
    grow
  >
    <v-tab
      class="font-weight-regular text--white"
      :class="`text-${tap_size}`"
      min-width="auto"
    >
      운영정보
    </v-tab>
    <v-tab
      id="back-white"
      color="white"
      class="font-weight-light"
      :class="`text-${tap_size}`"
      min-width="auto"
    >
      공지사항
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "InfoTabs",
  computed: {
    Tab:{
      set(value){
        this.$store.commit('info/setTab', value)
      },
      get () {
        return this.$store.state.info.Tab
      }
    },
    tap_size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'md': return 'md-h6'
        case 'lg': return 'lg-h6'
        default : return ''
      }
  }
  }
}
</script>

<style scoped>

</style>
