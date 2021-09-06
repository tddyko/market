<template>
  <v-row
    justify="center"
    class="ma-10 mt-16"
  >
    <v-col
      v-for="(reserve,index) in get_Reserve_DashBoard"
      :key="index"
      xl="4"
      lg="4"
      md="4"
    >
      <v-card
        class="mt-4 mx-auto"
        min-width="width"
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          :color="reserve.color"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="reserve.labels"
            :value="reserve.value"
            color="white"
            line-width="2"
            padding="16"
          />
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="text-h6 font-weight-light mb-2">
            {{ reserve.title }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ reserve.subtitle }}
          </div>
           <v-divider class="my-2" />
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="text-caption grey--text font-weight-light">{{ reserve.subContent }}{{ reserve.subContentValue }}건</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DashBoardReserve",
  computed: {
    get_Reserve_DashBoard(){
      return this.$store.getters["DashBoard/get_Reserve_DashBoard"]
    }
  },
  created(){
      this.$store.dispatch("DashBoard/actOrder_DashBoard")
  },
   width() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 200
        case 'md' :
          return 240
        case 'lg' :
          return 250
        case 'xl' :
          return 500
        default :
          return 200
      }
  }

}
</script>

<style>
</style>
