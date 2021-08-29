<template>
  <v-row
    justify="center"
  >
    <v-col
      lg="12"
      md="12"
      xl="12"
    >
      <v-form>
        <v-container>
          <v-row
            justify="center"
            align="center"
            class="mt-5"
          >
            <v-col
              lg="9"
              align="start"
            >
              공지사항
            </v-col>
          </v-row>
          <v-row
            justify="center"
            align="center"
          >
            <v-col
              lg="9"
            >
              <v-textarea
                ref="test"
                outlined
                dense
                hide-details
                no-resize
                rows="10"
              />
            </v-col>
          </v-row>
          <v-row
            justify="start"
            align="center"
          >
            <v-col
              lg="4"
            >
              <input
                ref="imageInput"
                type="file"
                multiple
                hidden
                @change="onChangeImages"
              >
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
          <div class="text-center">
            <v-btn
              class="mt-10 rounded-lg text-center"
              color="primary"
              width="80"
              height="40"
              type="submit"
            >
              저장
            </v-btn>
          </div>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InfoItemNotice",
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
