<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        text
        color="blue"
        v-on="on"
      >
        회원가입하기
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">회원가입</span>
      </v-card-title>
      <v-card-text>
        로그인폼
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          취소
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          가입
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Signup",
  data: () => ({
    dialog: false
  })
}
</script>

<style scoped>

</style>
