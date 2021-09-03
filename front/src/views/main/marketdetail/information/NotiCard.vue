<template>
  <v-card
    class="mx-auto my-10"
  >
    <v-row>
      <v-col>
        <div class="text-h4 mt-10 text-center">
          매장 공지
        </div>
      </v-col>
    </v-row>
    <v-row
      v-if="marketInfo.Market_inform.Market_noti_imgs"
      dense
      justify="center"
    >
      <v-col
        v-for="(a, index) in marketInfo.Market_inform.Market_noti_imgs"
        :key="index"
        align="center"
        cols="2"
      >
        <v-img
          :height="`${Img_size}`"
          :width="`${Img_size}`"
          class="my-10 rounded-xl"
          :src="imgSrc(a.market_noti_img)"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col>
        <v-textarea
          class="ma-1"
          dense
          height="200"
          hide-details
          no-resize
          outlined
          readonly
          rounded
          :value="marketInfo.Market_inform.market_noti"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NotiCard",
  computed: {
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '90'
        case 'md' : return '120'
        case 'lg' : return '150'
        case 'xl' : return '150'
        default : return '64'
      }
    },
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
}
}
</script>

<style scoped>

</style>
