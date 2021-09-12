<template>
  <div>
    <DashBoardOrder class="mt-10" />
    <DashBoardReserve class="mt-10" />
  </div>
</template>

<script>
  export default {
    name: "Dashboard",
    components: {
      DashBoardOrder : () => import('@/views/market/DashBoard/DashBoard_Order'),
      DashBoardReserve : () => import('@/views/market/DashBoard/DashBoard_Reserve'),
    },
   mounted() {
    this.$Axios({
        url : "http://localhost/dashboard",
        method : "GET",
        withCredentials : true,
        }).then((res) => {
            console.log(res)
            this.value.ordertotalCount = res.data.ordertotalCount;
            this.value.ordercompletedCount = res.data.ordercompletedCount;
            this.value.ordercancelCount = res.data.ordercancelCount;
            this.value.reservetotalCount = res.data.reservetotalCount;
            this.value.reservecompletedCount = res.data.reservecompletedCount;
            this.value.reservecancelCount = res.data.reservecancelCount;
            res.data.times.forEach(element=>{
              element = element.substring(11)
              this.labels.push(element)
            })
            console.log(this.value)
        }).catch((err) => {
          console.log(err);
        })
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

