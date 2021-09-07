<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-col cols="auto">
          <router-link to="/">
            <v-img
              :src="require('@/assets/logo.png')"
              class="mx-auto mb-6"
              contain
              width="165px"
            />
          </router-link>
        </v-col>
        <v-card
          width="450"
        >
          <v-card-text class="align-center">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <v-form
                @submit.prevent="login"
              >
                <validation-provider
                  v-slot="{ errors }"
                  :rules="{
                    required: true,
                    regx: /^[a-zA-Z0-9]+$/
                  }"
                  name="id"
                >
                  <v-text-field
                    v-model="id"
                    :error-messages="errors"
                    clearable
                    label="아이디"
                    outlined
                    placeholder="아이디를 입력하세요"
                    prepend-inner-icon="mdi-account"
                    single-line
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  :rules="{
                    required: true,
                    regx: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
                  }"
                  name="password"
                >
                  <v-text-field
                    v-model="passwd"
                    :append-icon="pwd_check ? 'mdi-eye' : 'mdi-eye-off'"
                    :counter="16"
                    :error-messages="errors"
                    :type="pwd_check ? 'text' : 'password'"
                    clearable
                    label="비밀번호"
                    outlined
                    placeholder="비밀번호를 입력하세요"
                    prepend-inner-icon="mdi-lock"
                    single-line
                    @click:append="pwd_check = !pwd_check"
                  />
                </validation-provider>
                <v-row class="mb-1 align-center">
                  <v-col>
                    <v-switch
                      v-model="login_switch"
                      inset
                    />
                  </v-col>
                  <v-spacer />
                  <v-col>
                    <v-btn
                      small
                      text
                      to="/"
                    >
                      아이디찾기
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      small
                      text
                      to="/"
                    >
                      비밀번호 찾기
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  :disabled="invalid"
                  block
                  color="primary"
                  type="submit"
                >
                  로그인
                </v-btn>
                <v-row class="mt-3 text-center">
                  <v-col>
                    <div>
                      아직 노웨잇 회원이 아니세요?
                      <sign-up />
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Login',
  components: {
    SignUp: () => import('@/views/signup/signupDialog')
  },
  data: () => ({
    id: null,
    passwd: null,
    pwd_check: false,
    login_switch: false,
  }),
  computed: {
    user(){return this.$store.getters.user;}
  },
  methods:  {

    async login() {
      console.log("ww")
      this.$Axios({
        method: 'post',
        url: "http://localhost/login",
        headers: {},
        withCredentials: true, //쿠키가 서로 저장
        data: {
          // This is the body part
          id : this.id,
          passwd: this.passwd,
          login_switch: this.login_switch
        }
      }).then((response) =>{
        console.log(response.data.market_id)
        this.$router.push('/market').catch((err)=>{
          console.log(err)
        })
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
