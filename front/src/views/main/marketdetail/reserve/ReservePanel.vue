<template>
  <v-container>
    <v-row>
      <v-col>
        <v-expansion-panels
          v-model="panel"
          :disabled="false"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>날짜 선택</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-date-picker
                v-model="date"
                :first-day-of-week="0"
                class="mt-10"
                color="warning"
                full-width
                locale="ko"
                @change="update"
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
                  v-for="(time,index) in reserveTime"
                  :key="index"
                  @click="test(index)"
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
                    @click="mynus"
                  >
                    -
                  </v-btn>
                  <span>{{ reserveCount }}</span>
                  <v-btn
                    class="btn-people"
                    outlined
                    @click="plus"
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
    reserveCount: {
      get() {
        return this.$store.getters["marketDetail/getReserveCount"]
      }
    },
    date: {
      get(){
      return this.$store.getters["market_modules/Reservation_Get_date"];
      },
      set(value){
        this.$store.dispatch("market_modules/Reservation_Set_Date_Actions", value)
      }
    }
  },
  created(){
    this.$store.dispatch("marketDetail/actReserveTime",this.$session.get('market_name'))
  },
  methods: {
    update(){
      console.log(this.$store.getters["market_modules/Reservation_Get_date"]);
    },
    mynus(){
      if(this.$store.getters["marketDetail/getReserveCount"]>1)
      this.$store.commit('marketDetail/setReserveCount',this.$store.getters["marketDetail/getReserveCount"]-1)
    },
    plus(){
      this.$store.commit('marketDetail/setReserveCount',this.$store.getters["marketDetail/getReserveCount"]+1)
    },
    test(index){
      this.$store.commit('marketDetail/setReserveTimeCh',index)
    }
  }
}
</script>

<style scoped>

</style>
