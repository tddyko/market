<template>
  <!-- Menu chips -->
  <v-row justify="center">
    <v-col
      cols="10"
      sm="8"
      md="7"
      lg="7"
      xl="5"
    >
      <v-sheet
        class="py-10"
      >
        <v-chip-group
          active-class="primary--text"
          mandatory
        >
          <v-chip
            v-for="ordermenu in ordermenus"
            :key="ordermenu"
          >
            {{ ordermenu }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
  <!-- // chips -->
</template>

<script>
export default {
  name: "OrderChips",
  computed: {
    ordermenus: {
      get() {
        return this.$store.getters["marketDetail/getOrderMenus"]
      }
    },
  }
}
</script>

<style scoped>

</style>
