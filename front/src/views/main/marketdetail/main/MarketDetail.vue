<template>
  <v-container>
    <market-title />
    <!-- 메뉴, 예약, 리뷰, 정보 탭 -->
    <menu-tabs />
    <!-- 탭 내용 -->
    <menu-tab-items />
    <order-popup />
    <reserve-popup />
    <review-popup />
  </v-container>
</template>

<script>
import OrderPopup from "@/views/main/marketdetail/popup/OrderPopup";
import ReservePopup from "@/views/main/marketdetail/popup/ReservePopup";
import ReviewPopup from "@/views/main/marketdetail/popup/ReviewPopup";
export default {
  components: {
    ReviewPopup,
    ReservePopup,
    OrderPopup,
    MenuTabItems: () => import('@/views/main/marketdetail/main/MenuTabItems'),
    MenuTabs: () => import('@/views/main/marketdetail/main/MenuTabs'),
    MarketTitle: () => import('@/views/main/marketdetail/main/MarketTitle')
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
