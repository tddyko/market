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
        class="my-3"
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
          v-for="(value,index) in valueDeterminate"
          :key="index"
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
        //개별 별 개수
        console.log(this.$store.getters["marketDetail/getValueDeterminate"])
        return this.$store.getters["marketDetail/getValueDeterminate"]
      }
    },
    ratingPoint: {
      get() {
        //5점 , 4점 ,3점 ,2점 1점
        return this.$store.getters['marketDetail/getRatingPoint']
      }
    },
    ratingStar: {
      get() {
        //평균
        console.log("getters : " + this.$store.getters["marketDetail/getRating"])
        return this.$store.getters["marketDetail/getRating"]
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '50'
        case 'md' : return '60'
        case 'lg' : return '70'
        case 'xl' : return '80'
        default : return '18'
      }
    },

  },
  created(){
    this.$store.dispatch("marketDetail/actRating",
        this.$session.get('market_name'))
  }
}
</script>
<style scoped>
</style>
