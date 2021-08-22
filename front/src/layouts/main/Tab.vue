<template>
  <v-tabs
    v-model="tab"
    v-bind="$attrs"
  >
    <v-tab>
      ad
    </v-tab>
  </v-tabs>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MainTab",
  computed: {
    ...mapState('app', ["tab"]),
    tab: {
      get() {
        return this.$store.getters['app/getTab'];
      },
      set(v) {
        return this.$store.dispatch('app/actTab', v)
      }
    }
  }
}
</script>

<style scoped>

</style>
