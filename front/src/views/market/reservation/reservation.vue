<template>
  <v-row justify="center">
    <v-col
      lg="10"
      xl="8"
      md="12"
      sm="12"
      cols="12"
      align-self="center"
    >
      <v-card class="rounded-xl">
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header class="rounded-xl">
              <v-text-field
                v-model="date"
                label="날짜 변경"
                prepend-icon="mdi-calendar"
                readonly
                flat
              />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-date-picker
                v-model="date"
                full-width
                class="elevation-1"
                @input="menu = false"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class=" ma-6 "
          flat
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: '예약내역',         //컴포넌트 이름
  data(){
    return{
        date: new Date().toISOString().substring(0,10),
        menu: false,
        modal: false,
        headers: [
          {
            text: '예약번호',
            align: 'center',
            sortable: false,
            value: 'ReservationNum',
          },
          { text: '예약시간', value: 'ReservationTime', align: 'center'},
          { text: '예약내역', value: 'Reservationinfo', align: 'center'},
          { text: '예약인원', value: 'Reservationset',  align: 'center'},
          { text: '예약상태', value: 'Reservation',     align: 'center'},
        ],
      items: [
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 취소" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 취소" },
    {ReservationNum: "ABC-1fgasa-fadsf", ReservationTime: "2021.01.01.(월) 오후3시 16분" , Reservationinfo: "허니콤보 외 1건", Reservationset: 2,  Reservation: "예약 완료" }
      ]
    }
  }
}
</script>

<style scoped>
#warp{
 width: 645px;
 height: 530px;
}

</style>
