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
      return this.$store.getters["market_modules/Get_Menu"];
      },
      set(value){
      this.$store.commit("market_modules/Set_Menu", value)
      }
    },
    date: {
      get(){
      return this.$store.getters["market_modules/Get_date"];
      },
      set(value){
        this.$store.commit("market_modules/Set_date",value);
      }
    }
  },
  methods: {
    update(){
      this.$store.commit("market_modules/Update_Menu");
    }
  }
}
</script>

<style scoped>

</style>
