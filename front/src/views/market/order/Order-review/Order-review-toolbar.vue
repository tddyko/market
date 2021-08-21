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
      >
        <v-col
          md="5"
          lg="5"
          xl="4"
        >
          <OrderReviewDatepicker />
        </v-col>
        <v-col
          md="6"
          lg="6"
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
