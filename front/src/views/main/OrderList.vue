<template>
  <v-row justify="center">
    <v-col
      lg="10"
      md="12"
      xl="8"
    >
      <v-card id="bg-grey">
        <v-container fluid>
          <v-row class="my-1">
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
                      color="warning lighten-2"
                      size="130"
                      tile
                    />
                  </v-col>
                  <v-col
                    cols="7"
                  >
                    <v-card-text>
                      <v-card-title v-text="card.title" />
                      <v-card-text class="text-left text--secondary">
                        허니콤보 1개 20,000원 <br>
                        00/00 (월) 상품 준비중
                      </v-card-text>
                    </v-card-text>
                  </v-col>
                  <!-- <v-col
                    cols="1"
                    class="mx-2"
                  > -->
                  <v-card-actions>
                    <v-spacer />

                    <v-btn
                      class="ma-2"
                      color="indigo"
                      outlined
                    >
                      리뷰 작성
                    </v-btn>
                  </v-card-actions>
                  <!-- </v-col> -->
                </v-row>
              </v-card>
              <!-- 카드 끝 -->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: '명륜진사갈비', flex: 12 },
      { title: '차이나짬뽕', flex: 12 },
    ],
  }),
}
</script>
<style>
#bg-grey{
  background-color: lightgrey;
}
#center-input{
  text-align: center
}
</style>
