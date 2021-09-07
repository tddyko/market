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
            class="mt-5 ml-1"
            justify="center"
          >
            <v-col
              align="start"
              sm="10"
              md="10"
              lg="10"
              xl="10"
            >
              공지사항
            </v-col>
          </v-row>
          <v-container>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                sm="10"
                md="10"
                lg="10"
                xl="10"
              >
                <v-textarea
                  ref="test"
                  dense
                  hide-details
                  no-resize
                  outlined
                  rows="10"
                  @input="notiInput($event)"
                />
              </v-col>
              <v-col
                cols="12"
                sm="10"
                md="10"
                lg="10"
                xl="10"
                align="start"
              >
                <input
                  ref="imageInput"
                  hidden
                  multiple
                  type="file"
                  @change="fileInput"
                >
                <v-btn
                  color="primary"
                  class="rounded-lg mb-12 mr-5"
                  outlined
                  type="button"
                  width="60"
                  height="60"
                  @click="onClickImgUpload"
                >
                  <v-icon bottom>
                    mdi-camera
                  </v-icon>
                </v-btn>
                <div class="d-inline-flex">
                  <v-img
                    v-for="(imageInput,index) in notiImgPrivew"
                    v-show="notiImgPrivew != null"
                    :key="index"
                    :src="imageInput"
                    class="mr-3"
                    max-width="60"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
          <div class="text-center">
            <v-btn
              class="mt-10 rounded-lg text-center"
              color="primary"
              width="80"
              height="40"
              type="submit"
              @click="submit"
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
  data(){
    return {
      notiImgPrivew : []
    }
  },
  computed: {
    Get_Image(){
      return this.$store.getters["info/Get_notice_img"]
    },
  },
  methods: {
    onClickImgUpload () {
      this.$refs.imageInput.click();
    },
    fileInput(){
      for(let i = 0; i < this.$refs.imageInput.files.length; i++){
        this.$store.commit("info/Set_notice_img",[
          ...this.$store.getters["info/Get_notice_img"]
          ,this.$refs.imageInput.files[i]
        ])
        this.notiImgPrivew = [...this.notiImgPrivew,
         URL.createObjectURL(this.$refs.imageInput.files[i])]
        console.log(this.$store.getters["info/Get_notice_img"])
      }
    },
    notiInput(event) {
      this.$store.commit("info/Set_notice", event)
    },
    submit(){
      this.$store.dispatch("info/sendNotices")
    }
  }
}
</script>

<style scoped>

</style>
