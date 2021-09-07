<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="Option_Select"
          :items="getMenu_name"
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
        this.$store.commit('menu/setOption_Select_Name',value)
      },
      get(){
        return this.$store.getters['menu/getOption_Select_Name']
      }
    },
    getMenu_name(){
      return this.$store.getters['menu/getMenu_option_name']
    }
  },
  methods: {
    setOption(){
      this.$store.commit("menu/setMenu_Option")
    }
  }
}
</script>
