<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>결제창</v-toolbar-title>
      <v-spacer />
      <v-btn
        dark
        icon
        @click="floating.orderDialog = false"
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
    <v-row>
      <v-col>
        <div class="text-h3">
          허니콤보
        </div>
        <div class="text-subtitle-1 text--secondary my-4">
          메뉴 소개
        </div>
      </v-col>
    </v-row>

    <v-divider />

    <v-row
      class="my-5"
      justify="space-between"
    >
      <v-col>
        <div class="text-h6 font-weight-bold">
          가격
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          29,000원
        </div>
      </v-col>
    </v-row>

    <v-divider />

    <v-row
      class="my-5"
      justify="center"
    >
      <v-col
        xl="7"
      >
        <v-radio-group v-model="floating.radioGroup">
          <v-radio
            v-for="card in cards"
            :key="card"
            :label="`${card.name}`"
            :value="card"
          />
        </v-radio-group>
      </v-col>
      <v-col
        xl="7"
      >
        <v-radio-group v-model="floating.radioGroup">
          <v-radio
            v-for="m in 3"
            :key="m"
            :label="`메뉴 ${m}`"
            :value="m"
          />
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h6 font-weight-bold my-5">
          총 합계
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold my-5">
          29,000원
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          depressed
        >
          결제하기
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "OrderCard",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      },
    },
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
