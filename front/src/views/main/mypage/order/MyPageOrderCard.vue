<template>
  <v-tab-item>
    <v-container>
      <v-row
        class="my-1"
        justify="center"
      >
        <v-col
          v-for="(card,index) in my_order"
          :key="index"
          lg="10"
          md="10"
          sm="12"
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
                  {{ card.Market.market_name }}
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  {{ card.Products[0].name }}  {{ card.price * card.order_count }}
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  {{ card.created_at }}  {{ card.current_state }}
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
                  @click="setOrderDialog(card.order_id,card.Market.market_name)"
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
    name: "MyPageOrderCard",
    data: () => ({
        card_text: 'text-center text-sm-left text-md-left pa-1'
    }),
    computed :{
      my_order : {
        get(){
          return this.$store.getters["mypage/getOrderList"]
        },
        set(v){
          this.$store.dispatch("mypage/actOrderList")
        }
      }
    },
  mounted() {
    this.$store.dispatch("mypage/actOrderList")
  },
  created() {
      this.$store.dispatch("authentiCation/actUserInfo")
  },
  methods: {
        setOrderDialog(orderId, market_name){
            this.$store.dispatch("mypage/actOrderDialog",{orderId : orderId, market_name : market_name})
        }
    }
}
</script>

<style scoped>
</style>
