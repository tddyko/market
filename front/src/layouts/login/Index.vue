<template>
  <v-app>
    <login />
  </v-app>
</template>

<script>
export default {
  name: "Index",
  components: {
    Login: () => import('./Content')
  }
}
</script>

<style scoped>

</style>
