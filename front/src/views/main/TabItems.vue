<template>
  <v-tabs-items
    v-model="tab"
  >
    <v-tab-item
      v-for="title in tabTitle"
      :key="title.title"
    >
      <store-list />
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import StoreList from "@/views/main/StoreList";
export default {
  name: 'MainTabBar',
  components: {StoreList},
  computed: {
    tab: {
      get() {
        return this.$store.getters['tab/getTab'];
      },
      set(v) {
        return this.$store.dispatch('tab/actTab', v)
      }
    },
    tabTitle: {
      get() {
        return this.$store.getters['tab/getTabTitle'];
      },
      set(v) {
        return this.$store.dispatch('tab/actTabTitle', v)
      }
    },
    tabItems: {
      get() {
        return this.$store.getters['items/getTabItems'];
      },
      set(v) {
        return this.$store.dispatch('items/actTabItems', v)
      }
    }
  },
}
</script>

<style scoped>

</style>
