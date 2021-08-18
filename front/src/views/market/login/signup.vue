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
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <span>스토어이미지</span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <input ref="imageInput" type="file" multiple hidden @change="onChangeImages" />
              <v-btn
                type="button"
                rounded
                outlined
                color="primary"
                @click="onClickImgUpload"
              >
                사진 업로드
                <v-icon right>
                  mdi-camera
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="red darken-1"
          text
          @click="dialog = false"
        >
          취소
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
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
