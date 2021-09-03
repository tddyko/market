<template>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tabs-slider color="blue" />
    <v-tab
      v-for="title in tabTitle"
      :key="title.title"
      class="font-weight-bold"
    >
      {{ title.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'MainTabBar',
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
    }
  },
}
</script>

<style scoped>

</style>
