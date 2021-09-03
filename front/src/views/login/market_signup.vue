<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
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
    <v-card>
      <v-toolbar
        color="white"
      >
        <v-toolbar-title>회원가입</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-form
          class="ma-3"
        >
          <v-row
            align="center"
          >
            <v-col
              cols="1"
            >
              <span>스토어이미지</span>
            </v-col>
            <v-col
              cols="1"
            >
              <v-avatar
                size="80"
              >
                <img
                  alt="John"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
              </v-avatar>
            </v-col>
            <v-col
              cols="1"
            >
              <input
                ref="imageInput"
                hidden
                multiple
                type="file"
                @change="onChangeImages"
              >
              <v-btn
                color="primary"
                outlined
                rounded
                type="button"
                @click="onClickImgUpload"
              >
                사진 업로드
                <v-icon right>
                  mdi-camera
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            align="center"
          >
            <v-col
              cols="1"
            >
              <span>아이디</span>
            </v-col>
            <v-col
              cols="6"
            >
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
            <v-col>
              <v-btn>
                중복확인
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>비밀번호</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>비밀번호 확인</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>이메일</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>@
            <v-col>
              <v-select
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>가게이름</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>전화번호</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>주소</span>
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>우편번호</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
            <v-col>
              <v-btn>주소검색</v-btn>
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>주소</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col>
              <span>상세주소</span>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="Solo"
                solo
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          class="white--text"
          color="blue darken-1"
          @click="dialog = true"
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
  }),
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
