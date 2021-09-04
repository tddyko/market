<template>
  <v-card>
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>회원가입</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <validation-observer>
        <v-form>
          <v-row
            align="center"
            class="mt-1"
          >
            <v-col
              cols="8"
              sm="8"
              md="3"
              lg="3"
              xl="3"
              class="ml-0 mr-6"
            >
              <v-row
                justify="center"
                class="mx-auto my-auto"
              >
                <v-avatar
                  size="80"
                >
                  <img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  >
                </v-avatar>
              </v-row>
              <v-row
                justify="center"
                class="mx-auto text-body-2"
              >
                <span>스토어 이미지</span>
              </v-row>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
            >
              <input
                ref="imageInput"
                hidden
                multiple
                type="file"
                @change="onChangeImages"
              >
              <v-btn
                class="pa-0 ma-0"
                color="primary"
                outlined
                rounded
                type="button"
                @click="onClickImgUpload"
              >
                <v-icon center>
                  mdi-camera
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="9"
              sm="10"
              md="3"
              lg="3"
              xl="3"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  regx: /^[a-zA-Z0-9]+$/
                }"
                name="아이디"
              >
                <v-text-field
                  v-model="validation.id"
                  :error-messages="errors"
                  clearable
                  label="아이디"
                  placeholder="아이디를 입력하세요"
                  outlined
                  dense
                />
              </validation-provider>
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
              class="mb-6"
            >
              <v-btn class="pa-0 ma-0">
                중복확인
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              xl="4"
              lg="4"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  regx: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

                }"
                name="비밀번호"
              >
                <v-text-field
                  v-model="validation.passwd"
                  :append-icon="validation.pwd_check1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :counter="16"
                  :type="validation.pwd_check1 ? 'text' : 'password'"
                  :error-messages="errors"
                  clearable
                  label="비밀번호"
                  placeholder="비밀번호를 입력해주세요."
                  outlined
                  dense
                  @click:append="validation.pwd_check1 = !validation.pwd_check1"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <validation-provider
                v-slot="{ errors }"
                name="비밀번호 확인"
                :rules="{
                  required: true,
                  confirmed: '비밀번호'
                }"
              >
                <v-text-field
                  v-model="validation.pwd_validate"
                  :counter="16"
                  :append-icon="validation.pwd_check2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="validation.pwd_check2 ? 'text' : 'password'"
                  :error-messages="errors"
                  clearable
                  label="비밀번호 확인"
                  placeholder="비밀번호를 다시한번 입력해주세요"
                  outlined
                  dense
                  @click:append="validation.pwd_check2 = !validation.pwd_check2"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-text-field
                class="ma-0 pa-0"
                label="이메일"
                placeholder="이메일을 입력해주세요."
                clearable
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-select
                label="카테고리"
                placeholder="카테고리를 선택해주세요."
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-text-field
                clearable
                label="가게이름"
                placeholder="가게이름을 입력해주세요."
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-text-field
                clearable
                label="전화번호"
                placeholder="전화번호를 입력해주세요."
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="9"
              sm="10"
              md="3"
              lg="3"
              xl="3"
            >
              <v-text-field
                clearable
                label="우편번호"
                placeholder="우편번호를 입력해주세요."
                outlined
                dense
              />
            </v-col>
            <v-col
              cols="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
              class="mb-6"
            >
              <v-btn class="pa-0 ma-0">
                주소검색
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              xl="4"
              lg="4"
            >
              <v-text-field
                clearable
                label="주소"
                placeholder="주소를 입력해주세요."
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-text-field
                clearable
                label="상세주소"
                placeholder="상세주소를 입력해주세요"
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "MarketSignupCard",
  computed: {
    dialog: {
      get() {
        return this.$store.getters["marketSignup/getMarketSignupDialog"]
      },
      set(value) {
        this.$store.commit('marketSignup/setMarketSignupDialog', value)
      }
    },
    validation: {
      get() {
        return this.$store.getters["marketSignup/getMarketSignupValidation"]
      },
      set(value) {
        this.$store.commit('marketSignup/setMarketSignupValidation', value)
      }
    }
  },
  methods: {
    onClickImgUpload () {
      this.$refs.imageInput.click();
    },
    onChangeImages (e) {
      console.log(e.target.files);
      const imgFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imgFormData.append('img', f);
      });
    }
  }
}
</script>
<style scoped>
</style>
