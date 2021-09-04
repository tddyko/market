<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="12"
      lg="10"
      md="12"
      xl="8"
    >
      <v-card
        class="rounded-xl"
        elevation="3"
      >
        <InfoToolbar />
        <v-divider />
        <InfoTabsItems />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    InfoToolbar : () => import("@/views/market/info/info-toolbar"),
    InfoTabsItems : () => import("@/views/market/info/info-tabs-items")
    },
computed:{
  Get_Week() {
    return this.$store.getters["info/Get_Week"]
  },
  Get_Day(){
    return this.$store.getters["info/Get_Day"]
  },
  Tab:{
    set(value){
      this.$store.dispatch("info/Info_Set_Tab_Actions",value)
    },
    get(){
      return this.$store.getters['info/Get_Tab']
    }
  }
},
}
</script>

<style>
</style>
