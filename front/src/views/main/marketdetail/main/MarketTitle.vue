<template>
  <v-card>
    <v-row
      justify="space-between"
    >
      <v-col
        align="center"
        xl="6"
        md="6"
        sm="6"
        cols="12"
      >
        <v-img
          :src="imgSrc(marketInfo.profile_img)"
          :max-height="`${Img_size}`"
          :max-width="`${Img_size}`"
        />
      </v-col>
      <v-col
        cols="12"
        xl="6"
        md="6"
        sm="6"
      >
        <v-col>
          <div
            class="text-h3 text-left font-weight-bold my-16"
            :class="`text-${Font_size}`"
          >
            {{marketInfo.market_name}} <small>{{marketInfo.Categories[0].name}}</small>
          </div>
        </v-col>
        <v-col>
          <v-rating
            background-color="grey"
            class="mb-1"
            color="warning"
            dense
            half-increments
            length="5"
            readonly
            :size="`${Rating_size}`"
            :value="ratingStar"
          />
        </v-col>
        <v-col>
          <div
            class="mb-3"
            :class="`text-${Font_size2}`"
          >
            {{marketInfo.address}}
          </div>

          <div
            :class="`text-${Font_size2}`"
          >
            {{marketInfo.market_phone}}
          </div>
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
        default : return 'full'
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '40'
        case 'md' : return '40'
        case 'lg' : return '50'
        case 'xl' : return '60'
        default : return '25'
      }
    },
    Font_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-h5'
        case 'md' : return 'md-h4'
        case 'lg' : return 'lg-h4'
        case 'xl' : return 'xl-h3'
        default : return 'h6'
      }
    },
    Font_size2(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-body-2'
        case 'md' : return 'md-h6'
        case 'lg' : return 'lg-h6'
        case 'xl' : return 'xl-h5'
        default : return 'body-1'
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
