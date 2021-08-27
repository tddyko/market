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
            align="center"
            class="mt-5"
            justify="center"
          >
            <v-col
              align="start"
              lg="9"
            >
              공지사항
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              lg="9"
            >
              <v-textarea
                ref="test"
                dense
                hide-details
                no-resize
                outlined
                rows="10"
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              lg="4"
            >
              <input
                ref="imageInput"
                hidden
                multiple
                type="file"
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
          <div class="text-center">
            <v-btn
              class="mt-10 rounded-lg text-center"
              color="primary"
              height="40"
              type="submit"
              width="80"
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
  }
}
</script>

<style scoped>

</style>
