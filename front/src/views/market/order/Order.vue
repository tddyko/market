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
  name: 'Order',         //컴포넌트 이름
  data(){
    return{
        date: new Date().toISOString().substring(0,10),
        menu: false,
        modal: false,
        headers: [
          {
            text: '주문번호',
            align: 'center',
            sortable: false,
            value: 'orderNum',
          },
          { text: '주문시각', value: 'orderTime', align: 'center'},
          { text: '주문내역', value: 'orderinfo', align: 'center'},
          { text: '주문건수', value: 'orderset',  align: 'center'},
          { text: '주문금액', value: 'orderpay',  align: 'center'},
          { text: '주문상태', value: 'order',     align: 'center'},
        ],
      items: [
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 취소" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 취소" },
    {orderNum: "ABC-1fgasa-fadsf", orderTime: "2021.01.01.(월) 오후3시 16분" , orderinfo: "허니콤보 외 1건", orderset: 2, orderpay: "33,000", order: "주문 완료" }
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
