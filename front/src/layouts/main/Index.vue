<template>
  <v-app>
    <main-app-bar />
    <main-content />
  </v-app>
</template>

<script>
export default {
  name: "MainFrame",
  components: {
    MainAppBar: () => import('@/layouts/main/AppBar'),
    MainContent: () => import('@/layouts/main/Content')
  },
}
</script>

<style scoped>

</style>
