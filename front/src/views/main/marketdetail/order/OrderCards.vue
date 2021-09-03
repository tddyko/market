<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="mb-10 text-center">
          메뉴카테고리
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
              <img :src="imgSrc(card.Product_imgs[0].product_img)" 
              alt="ㅗ">
              </v-avatar>
            </v-col>
            <v-col
              cols="8"
            >
              <v-card-title v-text="card.title" />
              <v-card-text class="text-left text--secondary">
                {{card.name}}
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                {{card.price}}원
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="indigo"
                outlined
                @click="1"
              >
                담기
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuCards",

  computed: {
    cards: {
      get() {
        console.log(this.$store.getters["marketDetail/getCards"]+'12312512r');
        return this.$store.getters["marketDetail/getCards"]
      }
    },
  },
    beforeCreate(){
      return this.$store.dispatch("marketDetail/actCards",this.$session.get('market_name'))  
  },
  methods: {
    imgSrc(name){  
      name = name.replaceAll("\\", "/"); 
      return require(`../../../../../../back/${name}`);
    },
    },
  }
</script>

<style scoped>

</style>
