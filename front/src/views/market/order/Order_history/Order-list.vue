<template>
  <div>
    <v-data-table
      :headers="Get_List_Header"
      :items="Get_List_Items"
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
    };
  },
  computed: {
    Get_List_Header(){
      return this.$store.getters["order/Get_Order_List_Headers"]
    },
    Get_List_Items(){
      console.log("wow")
      return this.$store.getters["order/Get_Order_List_Items"]
    },
   
  },
  
}
</script>

<style scoped>

</style>
