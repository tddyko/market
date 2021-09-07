<template>
  <v-container fluid
  >
    <v-row>
      <v-col
        v-for="(card,index) in cards"
        :key="index"
        :cols="6"
      >
        <!-- 반복될 카드 -->
        <v-card>
          <v-img

            :src="imgSrc(card.profile_img)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            @click="test(card)"
          >
            <v-card-title v-text="card.market_name" />
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-icon color="red lighten-2">
              mdi-heart
            </v-icon>
            <label
              class="mr-3"
            >
             {{ card.ratingAvg }}
            </label>
            <v-icon>mdi-comment-processing-outline</v-icon>
            <label
              class="mr-3"
            >
              {{card.reviewCount}}
            </label>
          </v-card-actions>
        </v-card>
        <!-- 카드 끝 -->
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-card> -->
</template>
<script>
export default {
  name: "ListCard",
   data() {
     return {
      tabIndex : this.$store.getters['tab/getTab']
    }
  },
  computed: {
    cards: {
      get() {
        console.log(this.$store.getters['marketList/getCards'])
        return this.$store.getters['marketList/getCards'];
      },
    },

  },
  methods: {
    test(card){
      this.$session.set('market_name', card.market_name)
      console.log("이동함")
      this.$store.dispatch("marketDetail/actMarketTitle",card.market_name)
      this.$router.push('MarketDetail')
    },
    imgSrc(name){
      name = name.replaceAll("\\", "/");
      return require(`../../../../../back/${name}`);
    }
  }

}
</script>

<style scoped>

</style>
