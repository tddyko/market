<template>
  <v-container>
    <DashBoardOrder />
    <DashBoardReserv />
    <DashBoardBtn />
  </v-container>
</template>

<script>
  export default {
    name: "Dashboard",
    components: {
      DashBoardOrder : () => import('@/views/market/DashBoard/DashBoard_Order'),
      DashBoardReserv : () => import('@/views/market/DashBoard/DashBoard_Reserve'),
      DashBoardBtn : () => import('@/views/market/DashBoard/DashBoard_btn')
    },
    
  }
</script>

<style>
.v-sheet--offset {
  top: -30px;
  right: -17px;
  position: relative;
}
</style>