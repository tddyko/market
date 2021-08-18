<template>
  <v-list-group
    :prepend-icon="item.icon"
    eager
    v-bind="$attrs"
  >
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in item.items">
      <market-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <market-list-items
        v-else
        :key="`child-${i}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: "MarketListGroup",
  components: {
    MarketListItems: () => import('@/layouts/market/ListItems')
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>

<style scoped>

</style>
