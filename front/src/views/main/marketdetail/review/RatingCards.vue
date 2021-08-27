<template>
  <v-container>
    <v-card
      class="mt-10 mx-auto"
      max-width="900px"
    >
      <v-row justify="center">
        <v-col
          align="center"
          align-self="center"
          xl="6"
        >
          <v-rating
            background-color="grey"
            color="warning"
            dense
            half-increments
            length="5"
            readonly
            size="50"
            :value="ratingStar"
          />
        </v-col>
        <v-divider
          inset
          vertical
        />
        <v-col
          align-self="center"
          xl="2"
        >
          <p
            v-for="rating in ratingPoint"
            :key="rating.ratingPoint"
          >
            {{ rating.ratingPoint }}
          </p>
        </v-col>
        <v-col xl="3">
          <v-progress-linear
            v-for="value in valueDeterminate"
            :key="value"
            :value="value.rating"
            class="mt-3 my-8"
            color="indigo darken-2"
            height="10"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "RatingCards",
  computed: {
    valueDeterminate: {
      get() {
        return this.$store.getters["marketDetail/getValueDeterminate"]
      }
    },
    ratingPoint: {
      get() {
        return this.$store.getters['marketDetail/getRatingPoint']
      }
    },
    ratingStar: {
      get() {
        return this.$store.getters["marketDetail/getRating"]
      }
    }
  }
}
</script>

<style scoped>

</style>
