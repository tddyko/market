<template>
  <v-card>
    <v-row
      justify="space-between"
    >
      <v-col
        class="ml-15"
        cols="4"
      >
        <v-img
          class="my-10"
          lazy-src="https://picsum.photos"
          max-height="600"
          max-width="600"
          src="https://picsum.photos/700"
        />
      </v-col>
      <v-col
        align-self="start"
        xl="7"
      >
        <div class="text-h3 text-left font-weight-bold my-16">
          백종원이 인정한 연돈 <small>일식</small>
        </div>
        <v-row>
          <v-col
            xl="1"
          >
            <v-rating
              background-color="grey"
              class="star"
              color="warning"
              dense
              half-increments
              length="5"
              readonly
              size="45"
              value="4.5"
            />
            <!-- <span class="rat-score">4.5</span> -->
          </v-col>
        </v-row>
        <h4>경기도 김포시 00동 000-00</h4>
        <h4>031-000-0000</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MarketTitle"
}
</script>

<style scoped>

</style>
