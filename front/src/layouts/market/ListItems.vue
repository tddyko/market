<template>
  <v-list-item
    link
    :to="item.to"
    exact-path
    class="py-1"
  >
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "MarketListItems",
  props: {
    item: {
      type: Object,
      default:() => ({})
    }
  }
}
</script>

<style scoped>

</style>
