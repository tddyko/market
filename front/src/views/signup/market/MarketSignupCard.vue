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
              class="ml-0 mr-6"
              cols="8"
              lg="3"
              md="3"
              sm="8"
              xl="3"
            >
              <v-row
                class="mx-auto my-auto"
                justify="center"
              >
                <v-avatar
                  size="80"
                >
                  <v-img
                    v-if="imgPreview!==null"
                    :src="imgPreview"
                  />
                </v-avatar>
              </v-row>
              <v-row
                class="mx-auto text-body-2"
                justify="center"
              >
                <span>스토어 이미지</span>
              </v-row>
            </v-col>
            <v-col
              cols="1"
              lg="1"
              md="1"
              sm="1"
              xl="1"
            >
              <input
                ref="imageInput"
                hidden
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
                @click="idCheck"
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
                name="이름"
              >
                <v-text-field
                  v-model="name"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  clearable
                  dense
                  label="이름"
                  outlined
                  placeholder="이름을 입력해주세요."
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
              <v-select
                v-model="category"
                :error-messages="errors"
                :items="categories"
                value="category_id"
                item-text="name"
                dense
                label="카테고리"
                outlined
              />
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
                name="가게이름"
              >
                <v-text-field
                  v-model="marketName"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  clearable
                  dense
                  label="가게이름"
                  outlined
                  placeholder="가게이름을 입력해주세요."
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
                name="가게 전화번호"
              >
                <v-text-field
                  v-model="market_phone"
                  :error-messages="errors"
                  class="ma-0 pa-0"
                  clearable
                  dense
                  label="가게 전화번호"
                  outlined
                  placeholder="가게 전화번호를 입력해주세요."
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
                @click="showApi"
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
  name: "MarketSignupCard",
  data: () => ({
    imgPreview : null,
    id: null,
    name : null,
    email: null,
    passwd: null,
    pwd_check1: null,
    pwd_check2: null,
    pwd_validate: null,
    category: null,
    marketName: null,
    phoneNum: null,
    postNum: null,
    address: null,
    addressDetail: null,
    errors: null,
    market_phone : null
  }),
  computed: {
    dialog: {
      get() {
        return this.$store.getters["authentiCation/getSignUpDialog"]
      },
      set(value) {
        this.$store.commit('authentiCation/setSignUpDialog', value)
      }
    },
    categories :{
      get(){
        return this.$store.getters["marketSignup/getCategories"]
      }
    },

},
  created() {
    this.$store.dispatch("marketSignup/actCategories")
  },
  methods: {
    idCheck(){
      if(this.id!==null){
        this.$store.dispatch("marketSignup/actIdCheck",this.id)
      }
    },
    onClickImgUpload () {
      this.$refs.imageInput.click();
    },
    onChangeImages (e) {
      this.imgPreview = URL.createObjectURL(this.$refs.imageInput.files[0])
    },
    async SignUp() {
      const result = await this.$refs.observer.validate()
      if(result && this.$store.getters["marketSignup/getIdCheck"]) {
        this.$store.dispatch("marketSignup/signUp",{
          userfile: this.$refs.imageInput.files[0],
          id : this.id,
          password: this.passwd,
          name : this.name,
          birthday : this.birthday,
          email : this.email,
          market_name : this.marketName,
          phonenumber : this.phoneNum,
          zipcode : this.postNum,
          address : this.address,
          dt_address : this.addressDetail,
          market_phone : this.market_phone,
          category : this.category,
          state : 'market',
        })
        alert('회원 가입이 완료 되었습니다')
        this.$store.commit('authentiCation/setSignUpDialog',{marketSignupDialog: null})
      }
    },
    resetForm() {
      this.id = null
      this.passwd = null
      this.name = null
      this.pwd_validate = null
      this.email = null
      this.marketName = null
      this.phoneNum = null
      this.postNum = null
      this.address = null
      this.addressDetail = null
      this.dialog.marketSignupDialog = false
      this.market_phone = null
      this.$refs.observer.reset()
    },
    showApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          var addr = '';
          var extraAddr = '';
          if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
          } else {
            addr = data.jibunAddress;
          }
          if(data.userSelectedType === 'R'){
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
              extraAddr += data.bname;
            }
            if(data.buildingName !== '' && data.apartment === 'Y'){
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);

              if(extraAddr !== ''){
                extraAddr = ' (' + extraAddr + ')';
              }
            }
            this.postNum = data.zonecode;
            this.address = addr;
            // 커서를 상세주소 필드로 이동한다.
            this.addressDetail = extraAddr

          }}}).open()
    }
  }
}
</script>

<style scoped>
</style>
