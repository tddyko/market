<template>
  <v-card>
    <v-toolbar
      dark
      color="white"
    >
      <v-toolbar-title>예약 확인 창</v-toolbar-title>
      <v-spacer />
      <v-btn
        dark
        icon
        @click="floating.reserveDialog = false"
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
          예약 확인
        </div>
        <div class="text-subtitle-1 text--secondary my-4">
          예약하신 내역을 확인해주세요
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
          좌석
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          {{ getRoom }}
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
          날짜
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          {{ getDate }}
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
          시간
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          {{ getTime }}
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
          인원
        </div>
      </v-col>
      <v-col>
        <div class="text-h6 font-weight-bold">
          {{getCount}}명
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          depressed
          @click="button"
        >
          예약 확인
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ReserveCard",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    },
    getCount : {
      get() {
        return this.$store.getters["marketDetail/getReservations_number"]
      }
    },
    getDate : {
      get() {
        return this.$store.getters["market_modules/Reservation_Get_date"]
      }
    },
    getTime : {
      get() {
        return this.$store.getters["marketDetail/getReserveTimeCh"]
      }
    },
    getRoom : {
      get() {
        console.log(this.$store.getters["marketDetail/getRoom"]);
        return this.$store.getters["marketDetail/getRoom"]
      }
    },
  },
  created(){
    //console.log(this.$store.getters["marketDetail/getReserveTime"],this.$session.get('market_name'));

  },
  methods: {
    button() {
      let inputdata = new Object();
      inputdata.room = this.$store.getters["marketDetail/getRoom"];
      inputdata.time = this.$store.getters["marketDetail/getReserveTimeCh"];
      inputdata.date = this.$store.getters["market_modules/Reservation_Get_date"];
      inputdata.count = this.$store.getters["marketDetail/getReservations_number"];
      inputdata.marketName = this.$session.get('market_name');
      this.$store.dispatch('marketDetail/actReservation',inputdata);
    }
  }
}
</script>

<style scoped>

</style>
