<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    persistent
    transition="dialog-bottom-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        v-on="on"
      >
        회원가입하기
      </v-btn>
    </template>
    <market-signup-card />
  </v-dialog>
</template>
<script>
export default {
  name: "Signup",
  components: {
    MarketSignupCard: () => import('@/views/signup/market/marketSignupCard')
  },
  computed: {
    dialog: {
      get() {
        return this.$store.getters["marketSignup/getMarketSignupDialog"]
      },
      set(value) {
        this.$store.commit('marketSignup/setMarketSignupDialog', value)
      }
    },
  },
}
</script>
<style scoped>
</style>
