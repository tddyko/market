<template>
  <v-tab-item>
    <v-container>
      <v-row
        class="my-1"
        justify="center"
      >
        <v-col
          v-for="(card,inedx) in my_reserve"
          :key="inedx"
          sm="12"
          md="10"
          lg="10"
          xl="10"
        >
          <!-- 반복될 카드 -->
          <v-card
            class="pa-5"
            height="auto"
            rounded="lg"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                align="center"
                class="mx-10"
                xl="1"
              >
                <v-avatar
                  color="warning lighten-2"
                  size="80"
                  tile
                />
              </v-col>
              <v-col
                align="start"
              >
                <v-card-text
                  :class="card_text"
                  class="text--secondary"
                >
                  {{card.Market.market_name }}
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  {{ card.reserve_seat }}
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  {{ card.DateAndTime }}  {{card.current_state}}
                </v-card-text>
              </v-col>
              <v-spacer />
              <v-spacer />
              <v-col>
                <v-btn
                  color="primary"
                  dark
                  outlined
                  right
                  @click="setReserveDialog(card.reservation_id,card.Market.market_name)"
                >
                  리뷰작성
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-tab-item>
</template>

<script>
export default {
  name: "MyPageReserveCard",
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left pa-1'
  }),
  computed : {
    my_reserve : {
      get(){
        console.log('get')
        console.log(this.$store.getters["mypage/getReserveList"])
        return this.$store.getters["mypage/getReserveList"]
      },
      set(v){
        this.$store.dispatch("mypage/actReserveList")
      }
    }
  },
  mounted() {
    console.log('mounted')
    this.$store.dispatch("mypage/actReserveList")
  },
  methods: {
    setReserveDialog(orderId,market_name){
      this.$store.dispatch("mypage/actReserveDialog",{orderId : orderId, market_name : market_name})
    }
  }
}
</script>

<style scoped>
</style>
