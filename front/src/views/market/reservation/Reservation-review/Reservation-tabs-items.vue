<template>
  <div>
    <v-tabs-items
      v-for="Reservation_items in ReviewTabsItems"
      :key="Reservation_items"
      v-model="Tab"
    >
      <v-tab-item>
        <v-divider />
        <v-card>
          <v-card-text>
            <v-container>
              <v-row
                align="center"
                justify="start"
                no-gutters
              >
                <v-col
                  lg="auto"
                  md="auto"
                  sm="auto"
                  xl="auto"
                >
                  <v-avatar>
                    <img
                      alt="John"
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
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
                  {{ Reservation_items.Nickname }}
                </v-col>
                <v-col
                  :class="`text-${Date_Font_Size}`"
                  align="start"
                  class="font-weight-light"
                  lg="5"
                  md="5"
                  sm="8"
                  xl="5"
                >
                  <div class="mx-5">
                    <div class="ml-1">
                      {{ Reservation_items.Date_issue }}
                    </div>
                    <div>
                      <v-rating
                        id="Rating-Inline"
                        :size="`${Rating_size}`"
                        :value="`${Reservation_items.Rating}`"
                        background-color="warning lighten-1"
                        color="orange"
                        dense
                        half-increments
                        readonly
                      />
                      ({{ Reservation_items.Rating }})
                    </div>
                  </div>
                </v-col>
                <v-col
                  align="center"
                  class="mt-1"
                  lg="12"
                  md="12"
                  xl="12"
                >
                  <img
                    alt="John"
                    class="rounded-lg ma-2"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    width="200"
                  >
                </v-col>
                <v-col
                  class="ma-2 mb-7"
                  cols="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xl="12"
                >
                  <v-textarea
                    :value="`${Reservation_items.Review}`"
                    class="px-16"
                    hide-details
                    no-resize
                    readonly
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
                    class="px-16"
                    dense
                    hide-details
                    no-resize
                    outlined
                    placeholder="내용을 입력하세요."
                    rounded
                    value="감사합니다 더욱더 발전하는 저희 교촌치킨이 되겠습니다."
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
  name: "ReservationReviewTabsItems",
  data(){
    return{
      rating: 4
    }
  },
  computed: {
    Tab() {
      return this.$store.getters['market_modules/Reservation_Get_Tab']
    },
    ReviewTabsItems(){
      return this.$store.state.reservation.Reservation_Review;
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
  }
}
</script>

<style>
#Rating-Inline{
  display: inline;
}
</style>
