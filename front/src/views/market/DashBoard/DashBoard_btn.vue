<template>
  <v-fab-transition>
    <v-btn
      color="success"
      fab
      large
      dark
      top
      left
      class="v-btn--example"
      :href="$router.resolve({name: 'Dashboard'}).href"
    >
      <v-icon>mdi-autorenew</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "DashBoardBtn"
}
</script>

<style>
.v-btn--example {
  bottom: 0;
  right: 16px;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>