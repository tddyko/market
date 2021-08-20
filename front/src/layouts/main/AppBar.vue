<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-toolbar-title>No Wait</v-toolbar-title>
    <v-spacer />
    <v-btn
      dark
      icon
      @click="expand = !expand"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-flex shrink>
      <v-expand-x-transition>
        <div
          v-show="expand"
          style="white-space: nowrap"
        >
          <v-text-field />
        </div>
      </v-expand-x-transition>
    </v-flex>
    <v-btn
      icon
      to="/login"
    >
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainAppBar"
}
</script>

<style scoped>

</style>
