<template>
  <v-container>
  <v-row
    justify="center"
    class="ma-10 mt-16"
  >
    <v-col
      v-for="(Order,index) in get_Order_DashBoard"
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
          :color="Order.color"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="Order.labels"
            :value="Order.value"
            color="white"
            line-width="2"
            padding="16"
          />
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="text-h6 font-weight-light mb-2">
            {{ Order.title }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ Order.subtitle }}
          </div>
          <v-divider class="my-2" />
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="text-caption grey--text font-weight-light">{{ Order.subContent }}{{ Order.subContentValue }}건</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashBoardOrder",
  computed: {
    get_Order_DashBoard() {
      return this.$store.getters["DashBoard/get_Order_DashBoard"]
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
}
</script>

<style>

</style>
