<template>
  <v-toolbar
    dark
    color="primary"
  >
    <v-toolbar-title>결제창</v-toolbar-title>
    <v-spacer />
    <v-btn
      icon
      dark
      @click="dialog = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "OrderPopupToolbar"
}
</script>

<style scoped>

</style>
