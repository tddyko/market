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
              :items="select"
              class="select-width pa-5 mt-5"
              dense
              label="추천순"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="12"
            md="12"
            sm="12"
          >
            <list-card />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    ListCard: () => import('@/views/main/marketlist/ListCard')
  },
  computed: {
    select: {
      get() {
        return this.$store.getters['market/getSelect'];
      },
      set(v) {
        return this.$store.dispatch('market/actSelect', v)
      }
    }
  },
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
