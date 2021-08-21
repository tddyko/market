<template>
  <div>
    <v-data-table
      :headers="List_Header"
      :items="List_Items"
      :items-per-page="5"
      class=" ma-6 "
      flat
    />
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      List_Header: this.$store.state.order.Order_List_Headers,
      List_Items: this.$store.state.order.Order_List_Items
    };
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
