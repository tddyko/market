<template
  v-slot="extension"
>
  <v-tabs
    v-model="tab"
    v-bind="$attrs"
    grow
  >
    <v-tabs-slider color="white" />
    <v-tab
      v-for="title in tabTitle"
      :key="title.title"
    >
      {{ title.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'MainTabBar',
  computed: {
    ...mapState('tab', ["tab"]),
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
