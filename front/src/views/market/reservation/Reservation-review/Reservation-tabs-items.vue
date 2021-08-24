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
                justify="start"
                no-gutters
                align="center"
              >
                <v-col
                  md="1"
                  lg="1"
                  xl="1"
                >
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >
                  </v-avatar>
                </v-col>
                <v-col
                  lg="1"
                  md="1"
                  xl="auto"
                  class="font-weight-bold"
                  :class="`text-${Font_Size}`"
                >
                  {{ Reservation_items.Nickname }}
                </v-col>
                <v-col
                  lg="9"
                  md="9"
                  xl="9"
                  class="font-weight-light mr-1"
                  :class="`text-${Date_Font_Size}`"
                  align="start"
                >
                  <div class="mx-5">
                    <div class="ml-1">
                      {{ Reservation_items.Date_issue }}
                    </div>
                    <div>
                      <v-rating
                        id="Rating-Inline"
                        :value="`${Reservation_items.Rating}`"
                        background-color="warning lighten-1"
                        color="orange"
                        half-increments
                        dense
                        readonly
                        :size="`${Rating_size}`"
                      />
                      ({{ Reservation_items.Rating }})
                    </div>
                  </div>
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
                  lg="8"
                  md="8"
                  xl="12"
                  class="ma-2"
                >
                  <v-textarea
                    :value="`${Reservation_items.Review}`"
                    placeholder="내용을 입력하세요."
                    no-resize
                    hide-details
                    readonly
                    class="px-16"
                    rounded
                  />
                </v-col>
                <v-col
                  lg="10"
                  md="10"
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
        case 'md':
          return 'md-subtitle-1'
        case 'lg':
          return 'lg-h6'
        case 'xl':
          return 'xl-h6'
        default :
          return ''
      }
    },
    Date_Font_Size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'md': return 'md-caption'
        case 'lg': return 'lg-caption'
        case 'xl': return 'xl-caption'
        default : return ''
      }

    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'md' : return '25'
        case 'lg' : return '22'
        case 'xl' : return '16.8'
        default : return ''
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
