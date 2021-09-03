<template>
  <v-container>
    <v-row class="my-10">
      <v-col>
        <h1 class="text-center">
          예약 좌석
        </h1>
      </v-col>
    </v-row>
    <v-row
      class="my-1"
      justify="center"
    >
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <!-- 반복될 카드 -->
        <v-card
          height="180px"
        >
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="mx-4"
              cols="2"
            >
              <v-avatar
                size="85"
                tile
              >
               <img :src="imgSrc(card.room_images)" 
              alt="ㅗ">
              </v-avatar>
            </v-col>
            <v-col
              cols="8"
            >
              <v-card-title v-text="card.title" />
              <v-card-text class="text-left text--secondary">
                {{card.room_name}}
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                {{card.room_comment}}
              </v-card-text> 
              <v-card-text class="text-left font-weight-bold price">
                {{card.room_price}}원
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-spacer />

              <v-btn
                color="indigo"
                outlined
                @click="room(card.room_name)"
              >
                담기
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      <!-- 카드 끝 -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ReserveCards",
  computed: {
    cards: {
      get() {
        console.log(this.$store.getters["marketDetail/getRoom"]);
        return this.$store.getters["marketDetail/getRoom"]
      }
    },
  },
   beforeCreate(){
      return this.$store.dispatch("marketDetail/actRoom",this.$session.get('market_name'))  
   },
  methods: {
    imgSrc(name){  
      name = name.replaceAll("\\", "/"); 
      return require(`../../../../../../back/${name}`);
    },
    room(res){
       this.$store.commit('marketDetail/setRoom',res)
    }
  },
}
</script>

<style scoped>

</style>
