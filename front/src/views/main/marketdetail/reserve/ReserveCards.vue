<template>
  <v-container>
    <v-row class="my-10">
      <v-col>
        <h1 class="text-center">
          예약 날짜
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
        sm="12"
        md="10"
        lg="10"
        xl="10"
      >
        <!-- 반복될 카드 -->
        <v-card
          height="auto"
          class="pa-5"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="mx-4"
              align="center"
              cols="12"
              sm="4"
              md="3"
              lg="3"
              xl="3"
            >
              <v-avatar
                color="warning lighten-2"
                size="130"
                tile
              />
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="5"
              lg="5"
              xl="5"
              align="center"
            >
              <div
                v-if="$vuetify.breakpoint.name === 'xs' "
                :class="card_text"
                v-text="card.title"
              />
              <v-card-title
                v-else
                :class="card_text"
                v-text="card.title"
              />
              <v-card-text
                class="text--secondary"
                :class="card_text"
              >
                메뉴 설명
              </v-card-text>
              <v-card-text
                class="font-weight-bold price"
                :class="card_text"
              >
                9,900원
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              sm="3"
              md="3"
              lg="2"
              xl="2"
            >
              <div
                v-if="$vuetify.breakpoint.name === 'xs'"
                class="text-center"
              >
                <v-btn
                  color="indigo"
                  outlined
                  class="text-center"
                >
                  담기
                </v-btn>
              </div>
              <v-card-actions
                v-else
              >
                <v-btn
                  color="indigo"
                  outlined
                  class="text-center"
                >
                  담기
                </v-btn>
              </v-card-actions>
            </v-col>
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
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left '
  }),
  computed: {
    cards: {
      get() {
        return this.$store.getters["marketDetail/getCards"]
      }
    },
  },

}
</script>

<style scoped>

</style>
