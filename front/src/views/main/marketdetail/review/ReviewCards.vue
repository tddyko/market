<template>
  <v-card
    class="my-10 mx-auto"
    
  >
    <!-- <v-card-text> -->
    <v-container>
      <v-row justify="end">
        <v-col xl="3">
          <v-select 
            label="주문리뷰"
            :items="get_select"  
            class="select-width pa-5 mt-5"
            dense 
            @change="getReview" 
          >
            <template #item="{ item, attrs, on }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-title
                  :id="attrs['aria-labelledby']"
                  v-text="item"
                />
              </v-list-item>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="start"
        v-for="(review,index) in getReviewCard"
        :key="index"
        no-gutters
      >
        <v-col
          lg="1"
          md="1"
          xl="1"
        >
          <v-avatar>
            <img
              alt="John"
              :src="imgSrc(review.Member.profile_img)"
            >
          </v-avatar>
        </v-col>
        <v-col
          class="font-weight-bold"
          lg="1"
          md="1"
          xl="1"
        >
          {{review.Member.nickname}}
        </v-col>
        <v-col
          align="start"
          :class="`text-${Font_size}`"
          lg="9"
          md="9"
          xl="9"
        >
          {{review.created_date}}
          <v-rating
            :size="`${Rating_size}`"
            background-color="warning lighten-1"
            color="orange"
            dense
            half-increments
            :value="review.rating"
          />
        </v-col>
        <v-col
          v-if="review.Reserve_review_imgs"
          align="left"
          class="mt-1"
          cols="12"
          sm="12"
          lg="12"
          md="12"
          xl="12"
        >
          <img
            v-for="(reserveImage,index) in review.Reserve_review_imgs"
            :key="index"
            alt="John"
            class="rounded-lg ma-2"
            :height="`${Img_size}`"
            :src="imgSrc(reserveImage.reserve_review_img)"
            :width="`${Img_size}`"
          >
        </v-col>
        <v-col
          v-if="review.Order_review_imgs"
          align="left"
          class="mt-1"
          cols="12"
          sm="12"
          lg="12"
          md="12"
          xl="12"
        >
          <img
            v-for="(orderimage,index) in review.Order_review_imgs"
            :key="index"
            alt="John"
            class="rounded-lg ma-2"
            :height="`${Img_size}`"
            :src="imgSrc(orderimage.order_review_img)"
            :width="`${Img_size}`"
          >
        </v-col>
        <v-col
          class="ma-2"
          lg="10"
          md="10"
          xl="10"
        >
          <v-textarea
            :class="`text-${Font_size}`"
            hide-details
            height="200"
            outlined
            dense
            readonly
            rounded
            :value="review.review"
          />
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card-text> -->
  </v-card>
</template>

<script>
export default {
  name: "ReviewCards",
  //select 받을 변수 만들기
  computed: {
    getReviewCard: function(){ 
      return this.$store.getters["marketDetail/getReviews"]
    },
    get_select:{
      get(){
        return this.$store.getters["marketDetail/getSelect"]
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '20'
        case 'md' : return '25'
        case 'lg' : return '30'
        case 'xl' : return '30'
        default : return '20'
      }
    },
    Font_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-body-2'
        case 'md' : return 'md-body-1'
        case 'lg' : return 'lg-body-1'
        case 'xl' : return 'xl-body-1'
        default : return 'body-2'
      }
    },
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '100'
        case 'md' : return '120'
        case 'lg' : return '140'
        case 'xl' : return '150'
        default : return '80'
      }
    }
  },
  methods : {
    getReview(e){  
      if(e=="주문리뷰"){
        this.$store.dispatch('marketDetail/actReviews',{market_name : this.$session.get('market_name'),
        switch :0
        })
       }else{
        this.$store.dispatch('marketDetail/actReviews',{market_name : this.$session.get('market_name'),
        switch :1
        })
      }  
      return "ww";
    },
    imgSrc(name){ 
      name = name.replaceAll("\\", "/");  
      return require(`../../../../../../back/${name}`);
    }
  },
  created(){
   this.$store.dispatch('marketDetail/actReviews',{market_name : this.$session.get('market_name'),
        switch :0})
  }
}
</script>

<style scoped>

</style>
