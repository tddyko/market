<template>
  <v-card>
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>회원가입</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="resetForm"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
      >
        <v-form
          @submit.prevent="SignUp"
        >
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
                  v-model="id"
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
              <v-btn
                class="pa-0 ma-0"
                type="button"
              >
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
                  v-model="passwd"
                  :append-icon="pwd_check1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :counter="16"
                  :type="pwd_check1 ? 'text' : 'password'"
                  :error-messages="errors"
                  clearable
                  label="비밀번호"
                  placeholder="비밀번호를 입력해주세요."
                  outlined
                  dense
                  @click:append="pwd_check1 = !pwd_check1"
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
                  v-model="pwd_validate"
                  :counter="16"
                  :append-icon="pwd_check2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="pwd_check2 ? 'text' : 'password'"
                  :error-messages="errors"
                  clearable
                  label="비밀번호 확인"
                  placeholder="비밀번호를 다시한번 입력해주세요"
                  outlined
                  dense
                  @click:append="pwd_check2 = !pwd_check2"
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
                :rules="{
                  required: true,
                  regx: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
                }"
                name="이메일"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="이메일"
                  placeholder="이메일을 입력해주세요."
                  clearable
                  outlined
                  dense
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
              <v-select
                :items="category"
                :error-messages="errors"
                label="카테고리"
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
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                }"
                name="가게이름"
              >
                <v-text-field
                  v-model="marketName"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="가게이름"
                  placeholder="가게이름을 입력해주세요."
                  clearable
                  outlined
                  dense
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
                :rules="{
                  required: true,
                }"
                name="전화번호"
              >
                <v-text-field
                  v-model="phoneNum"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="전화번호"
                  placeholder="전화번호를 입력해주세요."
                  clearable
                  outlined
                  dense
                />
              </validation-provider>
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
                }"
                name="우편번호"
              >
                <v-text-field
                  v-model="postNum"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="우편번호"
                  placeholder="우편번호를 입력해주세요."
                  clearable
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
              <v-btn
                class="pa-0 ma-0"
                type="button"
              >
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
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                }"
                name="주소"
              >
                <v-text-field
                  v-model="address"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="주소"
                  placeholder="주소를 입력해주세요."
                  clearable
                  outlined
                  dense
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
                :rules="{
                  required: true,
                }"
                name="상세주소"
              >
                <v-text-field
                  v-model="addressDetail"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  label="상세주소"
                  placeholder="상세주소를 입력해주세요."
                  clearable
                  outlined
                  dense
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
              align="center"
            >
              <v-btn
                type="submit"
                block
                color="primary"
                :disabled="invalid"
              >
                확인
              </v-btn>
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
  data: () => ({
    id: null,
    email: null,
    passwd: null,
    pwd_check1: null,
    pwd_check2: null,
    pwd_validate: null,
    category: [],
    marketName: null,
    phoneNum: null,
    postNum: null,
    address: null,
    addressDetail: null,
    errors: null
  }),
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
    },
    async SignUp() {
      const result = await this.$refs.observer.validate()
      if(result) {
        alert('회원가입 로직')
      }
    },
    resetForm() {
      this.id = null
      this.passwd = null
      this.pwd_validate = null
      this.email = null
      this.marketName = null
      this.phoneNum = null
      this.postNum = null
      this.address = null
      this.addressDetail = null
      this.dialog = false
      this.$refs.observer.reset()
    }
  }
}
</script>
<style scoped>
</style>
