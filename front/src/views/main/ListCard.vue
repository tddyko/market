<template>
  <v-container fluid
  >
    <v-row>
      <v-col
        v-for="card in get"
        :key="card.title"
        :cols="get.flex"
      >
        <!-- 반복될 카드 -->
        <v-card>
          <v-img
              :src="imgSrc(card.profile_img)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            @click="test"
          >
            <v-card-title v-text="card.market_name" />
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-icon color="red lighten-2">
              mdi-heart
            </v-icon>
            
              {{card.ratingAvg}}
         
            <v-icon>mdi-comment-processing-outline</v-icon>
             
              {{card.reviewCount}}
           
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
  computed: {
      get() {
        //console.log(this.$store.getters['market/getCards'])
        return this.$store.getters['market/getCards']
      }
  },
  created(){
    this.set();
  },
  methods: {
    set(){
      this.$store.dispatch('market/actCards');
    },
    test(){ 
    },
    imgSrc(name){ 
      name = name.replaceAll("\\", "/");  
      return require(`../../../../back/${name}`);
    }
  }
  
}
</script>

<style scoped>

</style>
