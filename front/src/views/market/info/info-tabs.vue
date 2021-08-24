<template>
  <v-tabs
    v-model="Tab"
    slider-color="light-blue"
    centered
    grow
  >
    <v-tab
      v-for="tab in Get_Tab_Headers"
      :key="tab"
      class="font-weight-regular text--white"
      :class="`text-${tap_size}`"
      min-width="auto"
    >
      {{ tab.Header }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "InfoTabs",
  computed: {
    Tab:{
      set(value){
        this.$store.dispatch("info/Info_Set_Tab_Actions",value)
      },
      get(){
        return this.$store.getters['info/Get_Info_Tab']
      }
    },
    Get_Tab_Headers(){
      return this.$store.getters["info/Get_Tab_Headers"]
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
