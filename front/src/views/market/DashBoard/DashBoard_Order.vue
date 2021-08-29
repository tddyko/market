<template>
  <v-row
    justify="center"
    class="ma-10 mt-16"
  >
    <v-col
      v-for="Order in get_Order_DashBoard"
      :key="Order"
    >
      <v-card
        class="mt-4 mx-auto"
        min-width="515"
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
          <span class="text-caption grey--text font-weight-light">{{ Order.subContent }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DashBoardOrder",
  computed: {
    get_Order_DashBoard(){
      return this.$store.getters["DashBoard/get_Order_DashBoard"]
    }
  }
}
</script>

<style>

</style>
