<template>
  <v-expansion-panels
    v-model="menu"
    flat
  >
    <v-expansion-panel>
      <v-expansion-panel-header class="rounded-xl">
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
</template>

<script>
export default {
  name: "ReservationPanel",
  data(){
    return{
    }
  },
  computed: {
    menu:{
      get(){
      return this.$store.getters["market_modules/Reservation_Get_Menu"];
      },
      set(value){
        this.$store.dispatch("market_modules/Reservation_Set_Menu_Actions", value)
      }
    },
    date: {
      get(){
      return this.$store.getters["market_modules/Reservation_Get_date"];
      },
      set(value){
        this.$store.dispatch("market_modules/Reservation_Set_Date_Actions", value)
      }
    }
  },
  methods: {
    update(){
      console.log("update")
      
      console.log(this.$store.getters["market_modules/Reservation_Get_date"])
      
      this.$store.dispatch("reservation/actReserve_List_Items",this.$store.getters["market_modules/Reservation_Get_date"])
    }
  }
}
</script>

<style scoped>

</style>
