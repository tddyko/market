<template>
  <v-card>
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>리뷰 작성</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="floating.reviewDialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="5"
        lg="5"
        md="5"
        sm="5"
      >
        <div :class="`text-${Font_Size}`">
          명륜진사갈비 반포점
        </div>
      </v-col>
      <v-col
        cols="5"
        lg="5"
        md="5"
        sm="5"
      >
        <v-rating
          :size="`${Rating_size}`"
          background-color="grey"
          color="warning"
          dense
          half-increments
          hover
          length="5"
          value="3"
        />
      </v-col>
      <v-col
        cols="10"
        lg="10"
        md="10"
        sm="10"
      >
        <v-textarea
          auto-grow
          class="p"
          outlined
          placeholder="리뷰를 입력하세요."
          rounded
          row-height="25"
          rows="10"
        />
      </v-col>
    </v-row>
    <v-row
      dense
      justify="left"
    >
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        offset="1"
        sm="auto"
      >
        <input
          ref="imageInput"
          hidden
          multiple
          type="file"
          @change="onChangeImages"
        >
        <v-btn
          :height="`${Button_Img_size}`"
          :width="`${Button_Img_size}`"
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
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        sm="auto"
      >
        <v-img
          :height="`${Button_Img_size}`"
          :width="`${Button_Img_size}`"
          class="white--text align-end rounded-xl"
          src="https://picsum.photos/80"
        />
      </v-col>
    </v-row>
    <v-row
      justify="end"
    >
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        sm="auto"
      >
        <v-btn
          color="primary"
          depressed
        >
          리뷰 완료
        </v-btn>
      </v-col>
      <v-col cols="1" />
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "ReviewCard",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-h6'
        case 'md':
          return 'md-h4'
        case 'lg':
          return 'lg-h3'
        default :
          return 'h7'
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '35'
        case 'md' : return '50'
        case 'lg' : return '60'
        case 'xl' : return '65'
        default : return '20'
      }
    },
    Button_Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '74'
        case 'md' : return '80'
        case 'lg' : return '90'
        case 'xl' : return '95'
        default : return '70'
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
  },
}
</script>

<style scoped>

</style>
