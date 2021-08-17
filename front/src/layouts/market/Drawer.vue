<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    app
  >

    <template
      #img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <drawer-header />
    <v-divider />
    <market-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "MarketDrawer",
  components: {
    MarketList: () => import('@/layouts/market/List'),
    DrawerHeader: () => import('@/layouts/market/DrawerHeader')
  },
  computed: {
    ...mapState('app', ["items"]),
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer'];
      },
      set(v) {
        return this.$store.dispatch('app/toggleDrawer', v)
      }
    }
  }
}
</script>

<style scoped>

</style>
