<template>
  <div class="ma-0">
    <v-tabs-items
      v-for="review_items in Get_Order_Review"
      :key="review_items"
      v-model="Get_Tab"
    >
      <v-tab-item>
        <v-divider />
        <v-card
          class="mt-0"
          elevation="3"
        >
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
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
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
                  {{ review_items.Nickname }}
                </v-col>
                <v-col
                  sm="8"
                  md="5"
                  lg="5"
                  xl="5"
                  class="font-weight-light"
                  :class="`text-${Date_Font_Size}`"
                  align="start"
                >
                  <div class="mx-5">
                    <div class="ml-1">
                      {{ review_items.Date_issue }}
                    </div>
                    <div>
                      <v-rating
                        id="Rating-Inline"
                        :value="`${review_items.Rating}`"
                        background-color="warning lighten-1"
                        color="orange"
                        half-increments
                        dense
                        readonly
                        :size="`${Rating_size}`"
                      />
                      ({{ review_items.Rating }})
                    </div>
                  </div>
                  <!--                  {{ $vuetify.breakpoint.name }}-->
                </v-col>
                <v-col
                  lg="12"
                  md="12"
                  xl="12"
                  align="center"
                  class="mt-1"
                >
                  <img
                    height="200"
                    width="200"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
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
                >
                  <v-textarea
                    :value="`${review_items.Review}`"
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
                    outlined
                    value="감사합니다 더욱더 발전하는 저희 교촌치킨이 되겠습니다."
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
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
            >
              취소
            </v-btn>
            <v-btn color="primary">
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
        default : return '16.4'
      }
    }
  }
}
</script>

<style>
#Rating-Inline{
  display: inline;
}
</style>
