<template>
  <div>
    <v-tabs-items
      v-model="Tab"
    >
      <v-tab-item
       v-for="a in 3"
        :key="a"
      >
        <v-divider />
        <v-card
          v-for="(review_items,index) in ReviewTabsItems"
          :key="index"
        >
          <v-card-text>
            <v-container>
              <v-row
                justify="start"
                no-gutters
                align="center"
              >
                <v-col
                  lg="auto"
                  md="auto"
                  sm="auto"
                  xl="auto"
                >
                  <v-avatar>
                    <img
                      :src="imgSrc(review_items.Member.profile_img)"
                      alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col
                  :class="`text-${Font_Size}`"
                  class="font-weight-bold ml-7"
                  cols="auto"
                  lg="auto"
                  md="auto"
                  sm="auto"
                  xl="auto"
                >
                   {{ review_items.Member.nickname }}
                </v-col>
                <v-col
                  :class="`text-${Date_Font_Size}`"
                  align="start"
                  class="font-weight-light"
                  lg="5"
                  md="5"
                  sm="8"
                  xl="5"
                  @click="showRecoment(review_items)"
                >
                  <div class="mx-5">
                    <div class="ml-1">
                       {{ review_items.created_date }}
                    </div>
                    <div>
                      <v-rating
                        id="Rating-Inline"
                        :size="`${Rating_size}`"
                         :value="`${review_items.rating}`"
                        background-color="warning lighten-1"
                        color="orange"
                        dense
                        half-increments
                        readonly
                      />
                       ({{ review_items.rating }})
                    </div>
                  </div>
                </v-col>
                <v-col
                 v-if="review_items.Reserve_review_imgs.length>0"
                  lg="12"
                  md="12"
                  xl="12"
                  align="center"
                  class="mt-1"
                  @click="showRecoment(review_items)"
                >
                  <img
                   v-for="(images,index) in review_items.Reserve_review_imgs"
                    :key="index"
                    height="200"
                    width="200"
                    :src="imgSrc(images.reserve_review_img)"
                    alt="John"
                    class="rounded-lg ma-2"
                  >
                </v-col>
                <v-col
                  class="ma-2 mb-7"
                  cols="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xl="12"
                  @click="showRecoment(review_items)"
                >
                  <v-textarea
                    v-model="review_items.review"
                    placeholder="내용을 입력하세요."
                    no-resize
                    hide-details
                    readonly
                    class="px-16"
                    rounded
                  />
                </v-col>
                <v-col
                  cols="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xl="12"
                >
                  <v-textarea
                    v-if="review_items.showRecoment"
                    outlined
                    :value="showValue(review_items.Reserve_review_answer)"
                    @input="searchChangeFunc($event)"
                    dense
                    placeholder="내용을 입력하세요."
                    no-resize
                    hide-details
                    class="px-16"
                    rounded
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions v-if="review_items.showRecoment">
            <v-spacer />
            <v-btn
              color="error"
            >
              취소
            </v-btn>
            <v-btn color="primary" @click="sendrecoment(review_items.reserve_review_id)">
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>

export default {
  name: "ReservationReviewTabsItems",
  data(){
    return{
      recoment : ""
    }
  },
  computed: {
    Tab() {
      return this.$store.getters['market_modules/Reservation_Get_Tab']
    },
    ReviewTabsItems(){
      return this.$store.getters["reservation/Get_Reserve_Review"]
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-body1'
        case 'md':
          return 'md-body-1'
        case 'lg':
          return 'lg-body-1'
        case 'xl':
          return 'xl-h6'
        default :
          return ''
      }
    },
    Date_Font_Size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': return 'sm-caption'
        case 'md': return 'md-caption'
        case 'lg': return 'lg-caption'
        case 'xl': return 'xl-caption'
        default : return 'caption'
      }

    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '18'
        case 'md' : return '18.6'
        case 'lg' : return '18.6'
        case 'xl' : return '18.6'
        default : return '8'
      }
    }
  },
  methods: {
    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return require(`../../../../../../back/${name}`);
    },
    showRecoment(card){
      card.showRecoment = !card.showRecoment;
    },
    showValue(findComent){
      if(findComent !=null){
        return findComent.answer;
      }
      else{
        return ""
      }
    },
    searchChangeFunc(event){
      return this.recoment = event
    },
    sendrecoment(data){
      let datas = {answer: this.recoment, review_id : data}
      console.log(datas)
      this.$store.dispatch('reservation/actReserve_Review_answers',datas)

    }
  }
}
</script>

<style>
#Rating-Inline{
  display: inline;
}
</style>
