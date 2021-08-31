<template>
  <v-container>
    <!-- 정보 탭 -->
    <v-card
      class="mx-auto my-10"
      elevation="2"
      max-width="1200"
    >
      <v-row>
        <v-col>
          <div class="text-h4 mt-10 text-center">
            공지사항
          </div>
        </v-col>
      </v-row>
      <v-row
        dense
        justify="center"
        v-if="marketInfo.Market_inform.Market_noti_imgs"
      >
        <v-col xl="2" v-for="(a, index) in marketInfo.Market_inform.Market_noti_imgs" :key="index">
          <v-img
            class="my-10"
            max-height="150"
            max-width="150"
            :src="imgSrc(a.market_noti_img)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text--secondary">
          {{marketInfo.Market_inform.market_noti}}
          </div>
        </v-col>
      </v-row>

      <v-divider
        class="my-15"
        inset
      />

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
             스토어이미지
            </v-col>
            <v-col lg="2">
              <v-avatar size="100">
                <img
                  alt="John"
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
             {{marketInfo.Market_inform.market_coment}}
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
              {{marketInfo.phonenumber}}
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
              {{marketInfo.Market_inform.start_time}}
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
                {{marketInfo.Market_inform.end_time}}
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
              {{marketInfo.Market_inform.Market_inform_holidays[0].market_inform_week_holiday}} {{marketInfo.Market_inform.Market_inform_holidays[0].market_inform_day_holiday}}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MenuInform",
  computed: {
    marketInfo : {
      get() { 
        return this.$store.getters["marketDetail/getMarketTitle"]
         },
    },
    beforeCreate(){
    return this.$store.dispatch("marketDetail/actMarketTitle",this.$session.get('market_name'))  
  },
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
