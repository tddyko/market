<template>
  <v-list
    dense
    expand
    nav
  >
    <template
      v-for="(item, index) in items"
    >
      <market-list-item-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <market-list-items
        v-else
        :key="`item-${index}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
export default {
  name: "MarketList",
  components: {
    MarketListItemGroup: () => import('@/layouts/market/ListGroup'),
    MarketListItems: () => import('@/layouts/market/ListItems')
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  }
}
</script>

<style scoped>

</style>
