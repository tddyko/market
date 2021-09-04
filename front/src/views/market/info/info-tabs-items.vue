<template>
  <div>
    <v-tabs-items
      v-model="get"
    >
      <v-tab-item>
        <InfoItemOperational />
      </v-tab-item>
      <v-tab-item>
        <InfoItemNotice />
      </v-tab-item>
      <v-tab-item>
        <MenuIndex />
      </v-tab-item>
      <v-tab-item>
        <option-index />
      </v-tab-item>
      <v-tab-item>
        <reserveindex />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import OptionIndex from "@/views/market/info/option/Option_index";
import MenuIndex from "@/views/market/info/menu/Menu_index";
import Reserveindex from "@/views/market/info/reserve/Reserve_index";

export default {
  name: "InfoTabsItems",
  components: {
    Reserveindex,
    MenuIndex,
    OptionIndex,
    InfoItemOperational : () => import("@/views/market/info/info-item-operational"),
    InfoItemNotice : () => import("@/views/market/info/info-item-notice")
  },
  computed: {
    get() {
      return this.$store.getters["info/Get_Tab"]
    }
  }
}
</script>

<style scoped>

</style>
