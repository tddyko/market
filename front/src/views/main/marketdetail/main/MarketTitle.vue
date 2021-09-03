<template>
  <v-card>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="6"
        align="center"
      >
        <v-img
          class="my-10"
          :max-height="`${Img_size}`"
          :max-width="`${Img_size}`"
          :src="imgSrc(marketInfo.profile_img)"
        />
      </v-col>
      <v-col
        cols="6"
      >
        <v-col
          cols="12"
        >
          <div
            class="text-h3 text-left font-weight-bold my-16"
            :class="`text-${Font_size}`"
          >
           {{marketInfo.market_name}} <small>{{marketInfo.Categories[0].name}}</small>
        </div>
        </v-col>
        <v-col
          cols="12"
        >
          <v-rating
            background-color="grey"
            class="star"
            color="warning"
            dense
            half-increments
            length="5"
            readonly
            :size="`${Rating_size}`"
            :value="ratingStar"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <h4
            :class="`text-${Font_size}`"
          >
            {{marketInfo.address}}
          </h4>
        </v-col>
        <v-col
          cols="12"
        >
          <h4
            :class="`text-${Font_size}`"
          >
            {{marketInfo.Market_inform.market_phone}}
          </h4>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MarketTitle",
  computed: {
    marketInfo : {
      get() { 
        return this.$store.getters["marketDetail/getMarketTitle"]
         },
    },
    ratingStar: {
      get() {
        return this.$store.getters["marketDetail/getRating"]
      }
    },
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '250'
        case 'md' : return '350'
        case 'lg' : return '400'
        case 'xl' : return '450'
        default : return '200'
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '40'
        case 'md' : return '40'
        case 'lg' : return '50'
        case 'xl' : return '60'
        default : return '20'
      }
    },
    Font_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-h5'
        case 'md' : return 'md-h4'
        case 'lg' : return 'lg-h4'
        case 'xl' : return 'xl-h3'
        default : return 'subtitle-1'
      }
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
}
}
</script>

<style scoped>
</style>