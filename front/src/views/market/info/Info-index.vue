<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
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
  data(){
    return{
        files: [],
        rules: [
          value => !value || value.size < 2000000 || '사진용량은 2mb(사이즈)를 초과할수 없습니다.',
      ],
    }

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
