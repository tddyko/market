<template>
  <div>
    <v-toolbar
      color="white"
      height="auto"
      class="rounded-t-xl"
    >
      <v-row
        align="center"
        justify="space-between"
        no-gutters
      >
        <v-col
          cols="12"
          sm="3"
          md="4"
          lg="4"
          xl="3"
        >
          <OrderReviewDatepicker />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
          xl="6"
        >
          <OrderReviewTabs />
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card class="rounded-xl">
      <OrderReviewTabsItems />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "OrderReviewToolbar",
  components:{
    OrderReviewTabs: () => import('@/views/market/order/Order-review/Order-review-tabs'),
    OrderReviewDatepicker: () => import('@/views/market/order/Order-review/Order-review-datepicker'),
    OrderReviewTabsItems: () => import('@/views/market/order/Order-review/Order-review-tabs-items')
  },
}
</script>

<style scoped>

</style>
