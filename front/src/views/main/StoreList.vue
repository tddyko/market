<template>
  <v-row justify="center">
    <v-col
      lg="10"
      md="12"
      xl="8"
    >
      <v-card id="bg-gray">
        <v-row>
          <v-col cols="9">
            <h1
              class="pa-5 mt-5 text-xl-h4 text-lg-h5 text-sm-body-2 text-left"
            >
              우리동네 맛집
            </h1>
          </v-col>
          <v-col col="3">
            <v-select
              :items="['추천순', '최신순']"
              class="select-width pa-5 mt-5"
              dense
              label="추천순"
            >
              <template #item="{ item, attrs, on }">
                <v-list-item
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-list-item-title
                    :id="attrs['aria-labelledby']"
                    v-text="item"
                  />
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="12"
            md="12"
            sm="12"
          >
            <!-- <v-card
              class="mx-auto"
              max-width="1200"
            > -->
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <!-- 반복될 카드 -->
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title v-text="card.title" />
                    </v-img>

                    <v-card-actions>
                      <v-spacer />

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <!-- 카드 끝 -->
                </v-col>
              </v-row>
            </v-container>
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
}
</script>
<style>
#bg-gray{
  background-color: lightgray;
}
#center-input{
  text-align: center
}
</style>
