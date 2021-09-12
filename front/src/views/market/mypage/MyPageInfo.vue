<template>
  <form>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          ID
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          @social_loginid
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          e-mail
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          testemail@itheca.com
        </v-col>
        <v-col cols="3" />
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          스토어 이름
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          <v-text-field
            color="primary"
            dense
            hide-details
            outlined
          />
        </v-col>
        <v-col cols="3">
          <v-btn color="primary">
            중복확인
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          align="center"
          align-self="center"
          cols="2"
        >
          비밀번호
        </v-col>
        <v-col cols="1">
          <div class="test" />
        </v-col>
        <v-col
          align="start"
          align-self="center"
          cols="2"
        >
          <v-text-field
            color="primary"
            dense
            hide-details
            outlined
            placeholder="최대 15자"
          />
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn
        class="pa-0 ma-10"
        color="primary"
        type="submit"
      >
        수정
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: "MyPageInfo",
  methods:{
    Mypage_input_img_click(){
      this.$refs.mypage_img_input.click();
    }
  }
}
</script>

<style scoped>
.test{
  border-right: 0.1em solid rgba(0, 0, 0, 0.12);
  height: 40px;
  max-width: 0;
}
</style>
