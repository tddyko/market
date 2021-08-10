<template>
  <v-container
    width-full
    fill-height
  >
    <v-row
      justify="center"
    >
      <v-col
        cols=""
        xs="10"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card
          class="pa-5 "

          elevation="5"
          fill-height
          width="500"
          height="650"
        >
          <v-card-text>
            <h1>
              로그인
            </h1>
          </v-card-text>
          <div
            align="left"
          >
            이메일
            <v-text-field

              outlined
              dense
              label="이메일"
            />
          </div>
          <div align="left">
            비밀번호
            <v-text-field
              outlined
              dense
              label="비밀번호"
            />
          </div>
          <v-row>
            <v-col
              class="mt-n3"
            >
              <v-switch
                v-model="switch1"
                :label="`Switch 1: ${switch1.toString()}`"
              />
            </v-col>
            <v-col>
              <a :href="link">아이디 찾기</a> | <a :href="link2">비밀번호 찾기</a>
            </v-col>
          </v-row>

          <v-btn
            large
            block
            color="primary"
            rounded
          >
            로그인
          </v-btn>
          <div
            class="pt-5"
          >
            아직 NoWait! 회원이 아니신가요? <a :href="link3">회원가입하기</a>
          </div>
          <v-row
            class="pt-5"
          >
            <v-col
              cols="4"
            >
              <v-divider />
            </v-col>
            소셜 계정으로 로그인
            <v-col
              cols="4"
            >
              <v-divider />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
            >
              <v-img
                src="@/assets/kt.png"
                height="40"
                @click="kakaoLogin"
              />


              <v-img
                src="@/assets/gg.png"
                height="40"
              />
              <v-img
                src="@/assets/fb.png"
                height="40"
              />
              <v-img
                src="@/assets/nv.png"
                height="40"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

  <script>
  export default {
    name: 'login',
    data: () => ({
      switch1: true,
      link:'http://google.com',
      link2:'http://naver.com',
      link3:'http://vuetifyjs.com',
      kakaoLogin: () => {
        alert('카카오 로그인 페이지')
      }
    })
  }
  </script>

  <style>

  </style>
