<template>
  <v-card
    class="mx-auto"
    elevation="1"
    outlined
  >
  <v-row       
    v-for="n in 2"
    :key="n"
    :class="n === 1 ? 'mb-6' : ''">
    <v-col
      v-for="k in n + 1"
      :key="k">
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">
          OVERLINE
        </div> -->
        <v-list-item-title class="text-h5 mb-5">
          Earnings
        </v-list-item-title>
        <div class="text-h2 text-center mb-4">
          <span class="light-blue--text lighten-4 font-weight-medium">
            $2723
          </span>
        </div>
        <v-list-item-subtitle>lorem Ipsum</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar
        
        size="0"
        color="grey"
      />  -->
    </v-list-item>
    </v-col>

    <!-- <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions> -->
    </v-row>
    <v-row
      v-for="n in 2"
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
    >
      <v-col
        v-for="k in n + 1"
        :key="k"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ k }} of {{ n + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: 'DashBoard',         //컴포넌트 이름
}
</script>

<style scoped>

</style>
