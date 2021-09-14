<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="name"
          :items="getMenu_name"
          item-text="name"
          item-value="product_id"
          label="메뉴 선택"
          outlined
          full-width
          @change="setOption"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
  }),
  computed: {
    Option_Select:{
      set(value){
        this.$store.dispatch('menu/actOption_Select_Name',value)
      },
      get(){
        return this.$store.getters['menu/getOption_Select_Name']
      }
    },
    getMenu_name(){
      return this.$store.getters['menu/getMenu']
    }
  },
  created() {
    this.$store.dispatch("menu/actMenu")
  },
  methods: {
    setOption(value){
      this.$store.dispatch("menu/actSelectedMenuId",value)
      this.$store.dispatch("menu/actMenu_Option",value)
    }
  }
}
</script>
