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
              cols="8"
            >
              <v-card-title v-text="card.title" />
              <v-card-text class="text-left text--secondary">
                메뉴 설명
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                9,900원
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-spacer />

              <v-btn
                color="indigo"
                outlined
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
        return this.$store.getters["marketDetail/getCards"]
      }
    },
  }
}
</script>

<style scoped>

</style>
