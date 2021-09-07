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
          >
            <v-col
              cols="9"
              lg="3"
              md="3"
              sm="10"
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
                  dense
                  label="아이디"
                  outlined
                  placeholder="아이디를 입력하세요"
                />
              </validation-provider>
            </v-col>
            <v-col
              class="mb-6"
              cols="1"
              lg="1"
              md="1"
              sm="1"
              xl="1"
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
              lg="4"
              md="4"
              sm="12"
              xl="4"
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
                  :error-messages="errors"
                  :type="pwd_check1 ? 'text' : 'password'"
                  clearable
                  dense
                  label="비밀번호"
                  outlined
                  placeholder="비밀번호를 입력해주세요."
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
              lg="4"
              md="4"
              sm="12"
              xl="4"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  confirmed: '비밀번호'
                }"
                name="비밀번호 확인"
              >
                <v-text-field
                  v-model="pwd_validate"
                  :append-icon="pwd_check2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :counter="16"
                  :error-messages="errors"
                  :type="pwd_check2 ? 'text' : 'password'"
                  clearable
                  dense
                  label="비밀번호 확인"
                  outlined
                  placeholder="비밀번호를 다시한번 입력해주세요"
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
              lg="4"
              md="4"
              sm="12"
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
                  clearable
                  dense
                  label="이메일"
                  outlined
                  placeholder="이메일을 입력해주세요."
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              lg="4"
              md="4"
              sm="12"
              xl="4"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                }"
                name="닉네임"
              >
                <v-text-field
                  v-model="memberName"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  clearable
                  dense
                  label="닉네임"
                  outlined
                  placeholder="닉네임을 입력해주세요."
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              lg="4"
              md="4"
              sm="12"
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
                  clearable
                  dense
                  label="전화번호"
                  outlined
                  placeholder="전화번호를 입력해주세요."
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="9"
              lg="3"
              md="3"
              sm="10"
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
                  clearable
                  dense
                  label="우편번호"
                  outlined
                  placeholder="우편번호를 입력해주세요."
                />
              </validation-provider>
            </v-col>
            <v-col
              class="mb-6"
              cols="1"
              lg="1"
              md="1"
              sm="1"
              xl="1"
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
              lg="4"
              md="4"
              sm="12"
              xl="4"
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
                  clearable
                  dense
                  label="주소"
                  outlined
                  placeholder="주소를 입력해주세요."
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              lg="4"
              md="4"
              sm="12"
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
                  clearable
                  dense
                  label="상세주소"
                  outlined
                  placeholder="상세주소를 입력해주세요."
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              align="center"
              cols="12"
              lg="4"
              md="4"
              sm="12"
              xl="4"
            >
              <v-btn
                :disabled="invalid"
                block
                color="primary"
                type="submit"
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
  name: "MemberSignupCard",
  data: () => ({
    id: null,
    email: null,
    passwd: null,
    pwd_check1: null,
    pwd_check2: null,
    pwd_validate: null,
    memberName: null,
    phoneNum: null,
    postNum: null,
    address: null,
    addressDetail: null,
    errors: null
  }),
  computed: {
    dialog: {
      get() {
        return this.$store.getters["signUp/getSignUpDialog"]
      },
      set(value) {
        this.$store.commit('signUp/setSignUpDialog', value)
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
      this.memberName = null
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
