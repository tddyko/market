<template> 
  <v-card class="rounded-xl">
    <v-container>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="picker"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-date-picker
        v-model="picker"
        elevation="2"
        width="auto"
        class="ma-7 rounded-lg"
      />
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1 ma-7"
        flat
      />
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Order',         //컴포넌트 이름
  data(){
    return{
        picker: '',
        date: new Date().toISOString().substr(0, 9),
        headers: [
          {
            text: '주문번호',
            align: 'center',
            sortable: false,
            value: 'orderNum',
          },
          { text: '주문시각', value: 'orderTime',align: 'center'},
          { text: '주문내역', value: 'orderinfo',align: 'center' },
          { text: '주문건수', value: 'orderset',align: 'center' },
          { text: '주문금액', value: 'orderpay',align: 'center'},
          { text: '주문상태', value: 'order',align: 'center' },
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
