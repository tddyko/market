<template>
  <v-tabs
    v-model="Tab"
    slider-color="light-blue"
    centered
    grow
  >
    <v-tab
      v-for="(Tabs, index) in Get_Order_Tab_Headers"
      :key="index"
      class="font-weight-regular text--white"
      :class="`text-${Tap_Size}`" 
    >
      {{ Tabs.Header }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "OrderReviewTabs",
  data() {
    return {
    }
  },
  computed: {
    Get_Order_Tab_Headers(){  
      return this.$store.getters["order/Get_Order_Tab_Headers"]
    },
    Tab: {
      get () {  
        let inputData = new Object(); 
        inputData.dates = this.$store.getters["market_modules/Order_Get_Dates"] 
        inputData.tabIndex = this.$store.getters["market_modules/Order_Get_Tab"]
        this.$store.dispatch("order/actOrder_Review_Items",inputData)
        return this.$store.getters["market_modules/Order_Get_Tab"]
      }, 
      set (value) {
        this.$store.dispatch("market_modules/Order_Set_Tab_Actions", value)
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
  },
  methods: {
    imgSrc(name){ 
      console.log(name) 
      name = name.replaceAll("\\", "/");  
      return require(`../../../../../../back/${name}`);
    }
  }
}
</script>

<style scoped>

</style>
