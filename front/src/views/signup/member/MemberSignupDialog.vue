<template>
  <v-dialog
    v-model="dialog.memberSignupDialog"
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
    <member-signup-card />
  </v-dialog>
</template>
<script>
export default {
  name: "MemberSignup",
  components: {
    MemberSignupCard: () => import('@/views/signup/member/MemberSignupCard'),
  },
  computed: {
    dialog: {
      get() {
        return this.$store.getters["authentiCation/getSignUpDialog"]
      },
      set(value) {
        this.$store.commit('authentiCation/setSignUpDialog', value)
      }
    },
    loginSwitch: {
      get() {
        return this.$store.getters["authentiCation/getLoginSwitch"]
      },
      set(value) {
        this.$store.commit('authentiCation/setLoginSwitch', value)
      }
    },
  },
}
</script>
<style scoped>
</style>
