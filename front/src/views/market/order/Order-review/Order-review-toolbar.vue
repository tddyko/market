<template>
  <div>
    <v-toolbar
      class="rounded-t-xl"
      color="white"
      elevation="3"
      height="auto"
    >
      <v-row
        align="center"
        justify="space-between"
        no-gutters
      >
        <v-col
          cols="12"
          lg="4"
          md="4"
          sm="3"
          xl="3"
        >
          <OrderReviewDatepicker />
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="6"
          xl="6"
        >
          <OrderReviewTabs />
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card
      class="rounded-xl"
      elevation="3"
    >
      <OrderReviewTabsItems />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "OrderReviewToolbar",
  components: {
    OrderReviewTabs: () => import('@/views/market/order/Order-review/Order-review-tabs'),
    OrderReviewDatepicker: () => import('@/views/market/order/Order-review/Order-review-datepicker'),
    OrderReviewTabsItems: () => import('@/views/market/order/Order-review/Order-review-tabs-items')
  },
}
</script>

<style scoped>

</style>
