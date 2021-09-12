<template>
  <v-card
    flat
  >
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>예약 리뷰 작성</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="setFloating"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row
      justify="center"
      class="mt-5"
    >
      <v-col
        align="center"
        cols="10"
        xl="10"
        lg="10"
        md="10"
        sm="10"
      >
        <div
          :class="`text-${Font_Size}`"
        >
          {{MarketInfo.market_name}}
        </div>
      </v-col>
      <v-col
        align="center"
        cols="6"
      >
        <v-rating
          v-model="reviewRating"
          :size="`${Rating_size}`"
          background-color="grey"
          color="warning"
          dense
          half-increments
          length="5"
        />
      </v-col>
      <v-col
        cols="10"
        lg="10"
        md="10"
        sm="10"
        xl="10"
      >
        <v-textarea
          v-model="review"
          auto-grow
          class="p"
          outlined
          placeholder="최소 15자 이상의 정성이 담긴 리뷰를 작성해세요."
          rounded
          row-height="20"
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
        <div class="d-inline-flex">
          <v-img
            v-for="(img,index) in orderReviewImgPreview"
            v-show="orderReviewImgPreview != null"
            :key="index"
            :height="`${Button_Img_size}`"
            :width="`${Button_Img_size}`"
            class="white--text align-end rounded-xl"
            :src="img"
          />
        </div>
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
          @click="submitReview"
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
  name: "MypageReserveDialogCard",
  data(){
    return {
      orderReviewImgPreview : []
    }
  },
  computed: {
    MarketInfo : {
      get(){
        console.log('getMarketINfo')
        console.log(this.$store.getters["mypage/getOrderInfo"])
        return this.$store.getters["mypage/getOrderInfo"]
      }
    },
    review : {
      get(){
        return this.$store.getters["mypage/getReview"]
      },
      set(v){
        console.log(v)
        this.$store.commit('mypage/setReview',v)
      }
    },
    reviewRating : {
      get(){
        return this.$store.getters["mypage/getReviewRating"]
      },
      set(v){
        console.log(v)
        this.$store.commit("mypage/setReviewRating",v)
      }
    },
    getFloating() {
      return this.$store.getters["mypage/getFloating"]
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-h4'
        case 'md':
          return 'md-h4'
        case 'lg':
          return 'lg-h4'
        case 'xl':
          return 'xl-h4'
        default :
          return {}
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
    setFloating(){
      this.$store.dispatch("mypage/actReserveDialog")
    },
    onChangeImages (e) {
      for(let i = 0; i < this.$refs.imageInput.files.length; i++){
        this.$store.commit("mypage/setReviewImg",[
          ...this.$store.getters["mypage/getReviewImg"]
          ,this.$refs.imageInput.files[i]
        ])
        this.orderReviewImgPreview = [...this.orderReviewImgPreview,
          URL.createObjectURL(this.$refs.imageInput.files[i])]
      }
    },
    submitReview(){
      this.$store.dispatch("mypage/actWriteReview",'reseve_review')
    }
  },
}
</script>

<style scoped>
</style>
