<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="10"
        lg="9"
        md="10"
        sm="12"
        xl="9"
      >
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
                    v-if="reservations_Number === 0"
                    class="btn-people"
                    disabled
                    outlined
                  >
                    -
                  </v-btn>
                  <v-btn
                    v-else
                    class="btn-people"
                    outlined
                    @click="setReservations_number_minus"
                  >
                    -
                  </v-btn>
                  <span>{{ reservations_Number }}</span>
                  <v-btn
                    class="btn-people"
                    outlined
                    @click="setReservations_number_plus"
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
  </v-container>
</template>

<script>
export default {
  name: "ReservePanel",
  computed: {
    reserveTime: {
      get() {
        return this.$store.getters["marketDetail/getReserveTime"]
      }
    },
    reservations_Number:{
      get() {
        return this.$store.getters["marketDetail/getReservations_number"]
      }
    }
  },
  methods: {
    setReservations_number_plus(){
      this.$store.dispatch('marketDetail/actReservations_number_plus')
    },
    setReservations_number_minus(){
      this.$store.dispatch('marketDetail/actReservations_number_minus')
    },
  }
}
</script>

<style scoped>

</style>
