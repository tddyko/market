<template>
  <v-tabs
    v-model="tabs"
    background-color="white"
    class="mt-10"
    fixed-tabs
  >
    <v-tabs-slider color="primary" />
    <v-tab
      v-for="(tab, index) in tabTitles"
      :key="index"
    >
      {{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "MenuTabs",
  computed: {
    tabs: {
      get() {
        return this.$store.getters['marketDetail/getTabs'];
      },
      set(v) {
        this.$store.dispatch("marketDetail/actTabs",v)
      }
    },
    tabTitles: {
      get() {
        return this.$store.getters["marketDetail/getTabTitles"];
      }
    }
  },
  methods: {
    get() {
      return this.$store.getters['marketDetail/getTabs'];
    },
  }

}
</script>

<style scoped>

</style>
