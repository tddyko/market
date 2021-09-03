<template>
  <order-dialog />
</template>
<script>
export default {
  name: 'OrderPopup',
  components: {
    OrderDialog: () => import('@/views/main/marketdetail/popup/order/OrderCartDailog')
  },
}
</script>
