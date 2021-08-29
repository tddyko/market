<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>리뷰 작성</v-toolbar-title>
      <v-spacer />
      <v-btn
        dark
        icon
        @click="floating.reviewDialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="12">
        <div class="text-h4">
          명륜진사갈비 반포점
        </div>
      </v-col>
      <v-col xl="12">
        <v-rating
          background-color="grey"
          color="warning"
          dense
          half-increments
          hover
          length="5"
          size="64"
          value="3"
        />
      </v-col>
      <v-col
        xl="10"
      >
        <v-textarea
          auto-grow
          class="p"
          outlined
          placeholder="리뷰를 입력하세요."
          rounded
          row-height="25"
          rows="10"
        />
      </v-col>
    </v-row>
    <v-row
      dense
      justify="center"
    >
      <v-col xl="1">
        <v-file-input
          height="40px"
          hide-input
          prepend-icon="mdi-camera"
        />
      </v-col>
      <v-col xl="1">
        <v-img
          class="white--text align-end"
          max-height="80"
          max-width="80"
          src="https://picsum.photos/80"
        />
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col>
        <v-btn
          color="primary"
          depressed
        >
          리뷰 완료
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "ReviewCard",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>

<style scoped>

</style>
