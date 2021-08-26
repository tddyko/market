<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          예약 확인
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>예약 확인 창</v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            dark
            @click="dialog = false"
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
          justify="space-between"
          class="my-5"
        >
          <v-col>
            <div class="text-h6 font-weight-bold">
              날짜
            </div>
          </v-col>
          <v-col>
            <div class="text-h6 font-weight-bold">
              2021년 9월 4일
            </div>
          </v-col>
        </v-row>

        <v-divider />

        <v-row
          justify="space-between"
          class="my-5"
        >
          <v-col>
            <div class="text-h6 font-weight-bold">
              시간
            </div>
          </v-col>
          <v-col>
            <div class="text-h6 font-weight-bold">
              오전 10:00
            </div>
          </v-col>
        </v-row>

        <v-divider />

        <v-row
          justify="space-between"
          class="my-5"
        >
          <v-col>
            <div class="text-h6 font-weight-bold">
              인원
            </div>
          </v-col>
          <v-col>
            <div class="text-h6 font-weight-bold">
              4명
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              depressed
              color="primary"
            >
              예약 확인
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'ReservePopup',
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>
