<template>
  <v-card
    class="mx-auto my-10"
    elevation="2"
  >
    <v-row>
      <v-col>
        <div class="text-h4 mt-10 text-center">
          매장 정보
        </div>
      </v-col>
    </v-row>
    <v-row
      class="mt-10"
      justify="center"
    >
      <v-col
        lg="10"
      >
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            스토어 이미지
          </v-col>
          <v-col lg="2">
            <v-avatar size="100">
                <img
                  alt="매장이미지"
                  :src="imgSrc(marketInfo.profile_img)"
                >
              </v-avatar>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            매장 소개
          </v-col>
          <v-col lg="6">
              {{ marketInfo.Market_inform.market_coment }}
            </v-col>
        </v-row>
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            매장 전화번호
          </v-col>
          <v-col
              lg="2"
            >
              {{ marketInfo.Market_inform.market_phone }}
            </v-col>
        </v-row>
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            영업시작 시간
          </v-col>
          <v-col lg="2">
              {{ marketInfo.Market_inform.start_time }}
            </v-col>
        </v-row>
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            영업종료 시간
          </v-col>
         <v-col lg="2">
              {{ marketInfo.Market_inform.end_time }}
            </v-col>
        </v-row>
        <v-row
          align="center"
          class="mb-10"
          justify="start"
        >
          <v-col
            class="font-weight-bold"
            lg="2"
          >
            휴무일
          </v-col>
          <v-col
              lg="2"
            >
              {{ marketInfo.Market_inform.Market_inform_holidays[0].market_inform_week_holiday }} {{ marketInfo.Market_inform.Market_inform_holidays[0].market_inform_day_holiday }}
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MenuInform",
  computed: {
    marketInfo : {
      get() {
        console.log("marketInfo get : " + this.$store.getters["marketDetail/getMarketTitle"])
        return this.$store.getters["marketDetail/getMarketTitle"]
      },
    }
  },
  methods: {
    imgSrc(name){
      console.log(name)
      name = name.replaceAll("\\", "/");
      return require(`../../../../../../back/${name}`);
    }
  },
}
</script>

<style scoped>
</style>



