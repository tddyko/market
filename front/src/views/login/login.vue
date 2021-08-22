<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          width="640"
        >
          <v-card-text class="align-center px-16">
            <validation-observer>
              <v-form>
                <validation-provider
                  v-slot="{ errors }"
                  name="id"
                  :rules="{
                    required: true,
                    regx: /^[a-zA-Z0-9]+$/
                  }"
                >
                  <v-text-field
                    v-model="id"
                    label="아이디"
                    placeholder="아이디를 입력하세요"
                    prepend-inner-icon="mdi-account"
                    outlined
                    single-line
                    clearable
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  :rules="{
                    required: true,
                    regx: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
                  }"
                >
                  <v-text-field
                    v-model="passwd"
                    label="비밀번호"
                    placeholder="비밀번호를 입력하세요"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    single-line
                    clearable
                    :counter="16"
                    :append-icon="pwd_check ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="pwd_check ? 'text' : 'password'"
                    :error-messages="errors"
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
                      text
                      small
                      to="/"
                    >
                      아이디찾기
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      text
                      small
                      to="/"
                    >
                      비밀번호 찾기
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  block
                  x-large
                  dark
                  color="primary"
                  @click="login()"
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
import axios from 'axios'
export default {
  name: 'Login',
  components: { 
    //SignUp: () => import('@/views/market/login/market_signup')
    },
  data: () => ({
    id: null,
    passwd: null,
    pwd_check: false,
    login_switch: false,
  }),
  methods : {
    login() { 
        console.log("ssdsd")
         axios({
           method: 'post',
              url: "http://localhost/login",
              headers: {}, 
              data: {
                // This is the body part
                id : this.id, passwd: this.passwd, login_switch: this.login_switch
              }
         }).then((response) =>{ console.log(response)
                this.$router.push('/market');
         })
      }
  }
}
</script>

<style scoped>

</style>
