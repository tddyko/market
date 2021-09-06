<template>
  <v-tabs-items
    v-model="tab"
  >
    <v-tab-item
      v-for="title in tabTitle"
      :key="title.title"
    >
      <main-market-list />
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  name: 'MainTabBar',
  components: {
    MainMarketList: () => import('@/views/main/marketlist/MarketList')
  },
  computed: {
    tab: {
      get() {
         let tabIndex = this.$store.getters['tab/getTab'];
        console.log(tabIndex)
        this.$store.dispatch('marketList/actCards',tabIndex);
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
