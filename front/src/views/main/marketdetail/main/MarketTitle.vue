<template>
  <v-card>
    <v-row
      justify="space-between"
    >
      <v-col
        class="ml-15"
        cols="4"
      >
        <v-img
          class="my-10"
          max-height="600"
          max-width="600"
          :src="imgSrc(marketInfo.profile_img)"
        />
      </v-col>
      <v-col
        align-self="start"
        xl="7"
      >
        <div class="text-h3 text-left font-weight-bold my-16">
          {{marketInfo.market_name}} <small>{{marketInfo.Categories[0].name}}</small>
        </div>
        <v-row>
          <v-col
            xl="1"
          >
            <v-rating
              background-color="grey"
              class="star"
              color="warning"
              dense
              half-increments
              length="5"
              readonly
              size="45"
              :value="ratingStar"
            />
            <!-- <span class="rat-score">4.5</span> -->
          </v-col>
        </v-row>
        <h4>{{marketInfo.address}}</h4>
        <h4>{{marketInfo.phonenumber}}</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MarketTitle",
  computed: {
    ratingStar: {
      get() {
        return this.$store.getters["marketDetail/getRating"]
      }
    },
    marketInfo : {
      get() { 
        return this.$store.getters["marketDetail/getMarketTitle"]
         },
    },
  
  },
  beforeCreate(){
    return this.$store.dispatch("marketDetail/actMarketTitle",this.$session.get('market_name'))  
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
