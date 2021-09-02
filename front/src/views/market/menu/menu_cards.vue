<template>
  <v-container>
    <v-row
      v-for="(card,index) in cards"
      :key="index"
      class="my-1"
      justify="center"
    >
      <!-- 반복될 카드 -->
      <v-col
        cols="auto"
        align-self="center"
      >
        <v-checkbox
          v-model="selected"
          :value="index"
        />
        {{ selected }}
      </v-col>
      <v-col
        :cols="card.flex"
        sm="11"
        md="9"
        lg="10"
        xl="9"
      >
        <v-card
          height="auto"
          class="pa-5"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="mx-4"
              align="center"
              cols="12"
              sm="4"
              md="3"
              lg="3"
              xl="3"
            >
              <v-avatar
                color="warning lighten-2"
                size="130"
                tile
              >
                <v-img />
              </v-avatar>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="5"
              lg="5"
              xl="5"
              align="start"
            >
              <v-card-title
                :class="card_text"
                centered-input
              >
                <v-text-field
                  :disabled="index !== selected"
                  class="centered-input"
                  hide-details
                  outlined
                  dense
                  :value="card.title"
                />
              </v-card-title>
              <v-card-text
                class="text--secondary"
                :class="card_text"
              >
                <v-text-field
                  :disabled="!card.checkbox"
                  hide-details
                  outlined
                  dense
                  :value="card_text"
                />
              </v-card-text>
              <v-card-text
                class="font-weight-bold price"
                :class="card_text"
              >
                <v-text-field
                  :disabled="!card.checkbox"
                  class="centered-input"
                  hide-details
                  outlined
                  dense
                  value="9,900원"
                />
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              sm="3"
              md="3"
              lg="2"
              xl="2"
            >
              <div
                v-if="$vuetify.breakpoint.name === 'xs'"
                class="text-center"
              >
                <v-btn
                  color="error"
                  outlined
                  class="text-center"
                >
                  삭제
                </v-btn>
              </div>
              <v-card-actions
                v-else
              >
                <v-btn
                  color="error"
                  outlined
                  class="text-center"
                >
                  삭제
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuCards",
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
    selected: []
  }),
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
.centered-input >>> input {
}
</style>


