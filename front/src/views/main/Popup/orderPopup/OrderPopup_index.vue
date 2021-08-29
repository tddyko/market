<template>
  <OrderPopupdialog />
</template>
<script>
export default {
  name : 'Orderpopupindex' ,
  components: {
    OrderPopupdialog : () => import('@/views/main/Popup/orderPopup/OrderPopup_dialog'),
  },
}
</script>
