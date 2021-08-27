<template>
  <v-container>
    <v-row class="my-10">
      <v-col>
        <h1 class="text-center">
          예약 날짜
        </h1>
      </v-col>
    </v-row>
    <v-row
      class="my-1"
      justify="center"
    >
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <!-- 반복될 카드 -->
        <v-card
          height="180px"
        >
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="mx-4"
              cols="2"
            >
              <v-avatar
                color="warning lighten-2"
                size="130"
                tile
              />
            </v-col>
            <v-col
              cols="8"
            >
              <v-card-title v-text="card.title" />
              <v-card-text class="text-left text--secondary">
                메뉴 설명
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                9,900원
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-spacer />

              <v-btn
                color="indigo"
                outlined
              >
                담기
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
        <!-- 카드 끝 -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels
          v-model="panel"
          :disabled="disabled"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>날짜 선택</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-date-picker
                v-model="picker"
                :first-day-of-week="0"
                class="mt-10"
                color="warning"
                full-width
                locale="ko"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>시간 선택</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip-group
                active-class="primary--text"
                column
              >
                <v-chip
                  v-for="time in reserveTime"
                  :key="time"
                >
                  {{ time }}
                </v-chip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>인원 선택</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <div>예약 인원수를 선택해주세요</div>
                </v-col>
                <v-col>
                  <v-btn
                    class="btn-people"
                    outlined
                  >
                    -
                  </v-btn>
                  <span>1</span>
                  <v-btn
                    class="btn-people"
                    outlined
                  >
                    +
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <reserve-popup />
  </v-container>
</template>

<script>
export default {
  name: "MenuReserve",
  components: {
    ReservePopup: () => import('@/views/main/marketdetail/popup/ReservePopup')
  },
  computed: {
    cards: {
      get() {
        return this.$store.getters["marketDetail/getCards"]
      }
    },
    reserveTime: {
      get() {
        return this.$store.getters["marketDetail/getReservTime"]
      }
    }
  }
}
</script>

<style scoped>

</style>
