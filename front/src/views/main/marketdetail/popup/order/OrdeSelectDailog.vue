<template>
  <v-row justify="center">
    <v-dialog
      v-model="floating.orderSelectDialog"
      :retain-focus="false"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="text-center"
          color="indigo"
          outlined
          v-bind="attrs"
          v-on="on"
          @click="select"
        >
          추가
        </v-btn>
      </template>
      <order-select />
    </v-dialog>
  </v-row>
</template>
<script>
export default {
   props: ["num"],
  name: "OrderSelectDialog",
  components: {
    OrderSelect: () => import('@/views/main/marketdetail/popup/order/OrderSelect')
  },
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
  },
  created(){
    console.log(this.num);
  },
  methods: {
    select(){
      this.$store.commit('marketDetail/setAddmenu',this.num);
      console.log(this.$store.getters["marketDetail/getAddmenu"]);
    }
  }
}
</script>
<style scoped>
</style>
