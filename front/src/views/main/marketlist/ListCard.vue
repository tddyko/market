<template>
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
            to=""
          >
            <v-card-title v-text="card.title" />
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-icon color="red lighten-2">
              mdi-heart
            </v-icon>
            <v-btn
              text
            >
              {{}}
            </v-btn>
            <v-icon>mdi-comment-processing-outline</v-icon>
            <v-btn
              text
            >
              {{}}
            </v-btn>
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
    cards: {
      get() {
        return this.$store.getters['marketList/getCards'];
      },
    },
  }
}
</script>

<style scoped>

</style>
