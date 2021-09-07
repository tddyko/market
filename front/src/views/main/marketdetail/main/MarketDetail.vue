<template>
  <v-container>
    <market-title />
    <!-- 메뉴, 예약, 리뷰, 정보 탭 -->
    <menu-tabs />
    <!-- 탭 내용 -->
    <menu-tab-items />
    <order-popup v-if="get === 0" />
    <reserve-popup v-else-if="get === 1" />
    <review-popup v-else-if="get === 2" />
  </v-container>
</template>

<script>
export default {
  components: {
    ReviewPopup: () => import('@/views/main/marketdetail/popup/review/ReviewPopup'),
    ReservePopup: () => import('@/views/main/marketdetail/popup/reserve/ReservePopup'),
    OrderPopup: () => import('@/views/main/marketdetail/popup/order/OrderPopup'),
    MenuTabItems: () => import('@/views/main/marketdetail/main/MenuTabItems'),
    MenuTabs: () => import('@/views/main/marketdetail/main/MenuTabs'),
    MarketTitle: () => import('@/views/main/marketdetail/main/MarketTitle')
  },
  computed: {
      get(){
        return this.$store.getters["marketDetail/getTabs"]}
    },
  }

</script>


<style>
small{
  font-size: 0.5em;
  font-weight: normal;
  color: grey;
}
.rat{
  display: inline;
}
h4{
  margin-top: 2em;
  font-size: 1.5em;
  text-align: left;
  font-weight: 400;
}
h4:first-of-type{
  margin-top: 3em;
}
.chip-group{
  margin-left: auto;
  margin-right: auto;
}
.price{
  font-size: 1.3em !important;
}
.btn-people{
  margin: 0 2em;
}
</style>
