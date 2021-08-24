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
            @change="updatetest"
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
        return this.$store.getters["order/Get_Menu"]
      },
      set(value){
        this.$store.commit("order/Set_Menu", value)
      },
    },
    date:{
      get(){
        return this.$store.getters["order/Get_date"]
      },
      set(value){
        this.$store.commit("order/set_date", value)
      }
    }
  },
  methods: {
    updatetest(){
      this.$store.commit("order/Update_Menu");
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
