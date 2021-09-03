<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="mb-10 text-center">
          메뉴이름
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
        lg="9"
        md="10"
        sm="12"
        xl="9"
      >
        <!-- 반복될 카드 -->
        <v-card
          class="pa-5"
          height="auto"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              align="center"
              class="mx-4"
              cols="12"
              lg="3"
              md="3"
              sm="4"
              xl="3"
            >
              <v-avatar
                color="warning lighten-2"
                size="130"
                tile
              />
            </v-col>
            <v-col
              align="center"
              cols="12"
              lg="5"
              md="5"
              sm="4"
              xl="5"
            >
              <v-card-text
                :class="card_text"
                class="text--secondary"
              >
                메뉴 설명
              </v-card-text>
              <v-card-text
                :class="card_text"
                class="font-weight-bold price"
              >
                9,900원
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              lg="2"
              md="3"
              sm="3"
              xl="2"
            >
              <order-select-dialog />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "MenuCards",
  components: {
    OrderSelectDialog: () => import('@/views/main/marketdetail/popup/order/OrdeSelectDailog')
  },
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left '
  }),
  computed: {
    cards: {
      get(){
        return this.$store.getters["marketDetail/getCards"]
      }
    },
    btnOption(){
      switch (this.$vuetify.breakpoint.name){
        default : return 'center'
      }
    },
  }
}
</script>
<style scoped>
</style>
