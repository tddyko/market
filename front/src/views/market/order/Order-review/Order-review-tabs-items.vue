<template>
  <div class="ma-0">
    <v-tabs-items
      v-model="Get_Tab">
      <v-tab-item
        v-for="a in 3"
        :key="a"
      >
        <v-divider />
        <v-card
          class="mt-0"
          elevation="3"
         v-for="(review_items,index) in Get_Order_Review"
        :key="index">
          <v-card-text>
            <v-container>
              <v-row
                justify="start"
                no-gutters
                align="center"
              >
                <v-col
                  sm="auto"
                  md="auto"
                  lg="auto"
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
                  cols="auto"
                  sm="auto"
                  md="auto"
                  lg="auto"
                  xl="auto"
                  class="font-weight-bold ml-7"
                  :class="`text-${Font_Size}`"
                >
                  {{ review_items.Member.nickname }}
                </v-col>
                <v-col
                  sm="8"
                  md="5"
                  lg="5"
                  xl="5"
                  class="font-weight-light"
                  :class="`text-${Date_Font_Size}`"
                  align="start"
                  @click="showRecoment(review_items)"
                >
                  <div class="mx-5">
                    <div class="ml-1">
                      {{ review_items.created_date }}
                    </div>
                    <div>
                      <v-rating
                        id="Rating-Inline"
                        :value="`${review_items.rating}`"
                        background-color="warning lighten-1"
                        color="orange"
                        half-increments
                        dense
                        readonly
                        :size="`${Rating_size}`"
                      />
                      ({{ review_items.rating }})
                    </div>
                  </div>
                </v-col>
                <v-col
                  v-if="review_items.Order_review_imgs.length>0"
                  lg="12"
                  md="12"
                  xl="12"
                  align="center"
                  class="mt-1"
                  @click="showRecoment(review_items)"
                >
                  <img
                    v-for="(images,index) in review_items.Order_review_imgs"
                    :key="index"
                    height="200"
                    width="200"
                    :src="imgSrc(images.order_review_img)"
                    alt="John"
                    class="rounded-lg ma-2"
                  >
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  class="ma-2 mb-7"
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
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                >
                  <v-textarea
                    v-if="review_items.showRecoment"
                    outlined
                    :value="showValue(review_items.Order_review_answer)"
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
            <v-btn color="primary" @click="sendrecoment(review_items.order_review_id)">
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
  name: "OrderReviewTabsItems",
  data(){
    return{
      recoment : ""
    }
  },
  computed: {
    Get_Order_Review(){
      return this.$store.getters["order/Get_Order_Review"]
    },
    Get_Tab() {
       return this.$store.getters["market_modules/Order_Get_Tab"]
    },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-body-1'
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
        case 'sm' : return '17'
        case 'md' : return '17'
        case 'lg' : return '17'
        case 'xl' : return '17'
        default : return '16.5'
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
      this.$store.dispatch('order/actOrder_Review_answers',datas)

    }
  }
}
</script>

<style>
#Rating-Inline{
  display: inline;
}
</style>
