<template>
  <v-card
    class="mt-10 mx-auto"
  >
    <v-row
      class="mr-3"
      justify="space-between"
    >
      <v-col
        align="center"
        align-self="center"
        cols="6"
      >
        <v-rating
          :size="`${Rating_size}`"
          :value="ratingStar"
          background-color="grey"
          color="warning"
          dense
          half-increments
          length="5"
          readonly
        />
      </v-col>
      <v-divider
        inset
        vertical
      />
      <v-col
        align-self="center"
        cols="3"
      >
        <p
          v-for="rating in ratingPoint"
          :key="rating.ratingPoint"
          align="center"
        >
          {{ rating.ratingPoint }}
        </p>
      </v-col>
      <v-col
        cols="3"
      >
        <v-progress-linear
          v-for="value in valueDeterminate"
          :key="value"
          :value="value.rating"
          class="my-8"
          color="indigo darken-2"
          height="10"
        />
      </v-col>
    </v-row>
  </v-card>
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
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '35'
        case 'md' : return '50'
        case 'lg' : return '60'
        case 'xl' : return '65'
        default : return '15'
      }
    },
  }
}
</script>
<style scoped>
</style>
