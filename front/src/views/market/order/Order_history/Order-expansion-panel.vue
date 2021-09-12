<template>
  <div>
    <v-expansion-panels
      v-model="menu"
      flat
    >
      <v-expansion-panel>
        <v-expansion-panel-header
          class="rounded-xl"
        >
          <v-text-field
            v-model="date"
            label="날짜 변경"
            prepend-icon="mdi-calendar"
            readonly
            flat
          />
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-date-picker
            v-model="date"
            full-width
            class="elevation-1"
            @change="update"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "OrderExpansionPanel",
  data(){
    return{
    }
  },
  computed: {
    menu:{
      get(){
        return this.$store.getters["market_modules/Order_Get_Menu"]
      },
      set(value){ 
        this.$store.dispatch("market_modules/Order_Set_Menu_Actions", value)
      },
    },
    date:{
      get(){
        return this.$store.getters["market_modules/Order_Get_Date"]
      },
      set(value){
        this.$store.dispatch('market_modules/Order_Set_Date_Actions', value)
      }
    }
  },
  methods: {
    update(){
      this.$store.dispatch("order/actOrder_List_Items",this.$store.getters["market_modules/Order_Get_Date"])
    }
  }
}
</script>

<style scoped>
#test{
  display: inline;
  text-align: center
}
.test1{
  background-color: black;
  height: .1em;
  width: 2em;
}

</style>
