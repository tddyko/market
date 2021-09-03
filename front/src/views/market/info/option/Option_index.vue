<template>
  <v-container>
    <!--  상단 dropdown  -->
    <option-select />

    <v-divider />
    <!-- 하단 패널  -->
    <option-panel />
    <!--  플로팅 버튼  -->
    <option-button />
  </v-container>
</template>
<script>
export default {
  name: "OptionIndex",
  components: {
    OptionButton:() => import ("@/views/market/info/Option+Button"),
    OptionPanel: () => import("@/views/market/info/option/OptionPanel"),
    OptionSelect: () => import ("@/views/market/info/option/OptionSelect"),
  },
}
</script>
