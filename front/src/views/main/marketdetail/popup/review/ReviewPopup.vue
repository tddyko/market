<template>
  <review-dialog />
</template>
<script>
export default {
  name: 'ReviewPopup',
  components: {
    ReviewDialog: () => import('@/views/main/marketdetail/popup/review/ReviewDialog')
  },
}
</script>
