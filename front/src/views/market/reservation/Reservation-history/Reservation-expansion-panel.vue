<template>
  <v-expansion-panels
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
          @input="menu = false"
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
      date: new Date().toISOString().substring(0,10),
      menu: false
    }
  }
}
</script>

<style scoped>

</style>
