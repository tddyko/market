const state = () => ({ //스테이츠가 data랑 비슷한 맥락이고
  Tab_Headers: [
    {
      Header: "전체",
    },
    {
      Header: "미답변",
    },
    {
      Header: "답변완료",
    },
  ],
  Tab: null,
  Order_List_Headers: [
    { text: "주문번호", align: "center", sortable: false, value: "orderNum" },
    { text: "주문시각", value: "orderTime", align: "center" },
    { text: "주문내역", value: "orderinfo", align: "center" },
    { text: "주문건수", value: "orderset", align: "center" },
    { text: "주문금액", value: "orderpay", align: "center" },
    { text: "주문상태", value: "order", align: "center" },
  ],
  Order_List_Items: [
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 취소",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 취소",
    },
    {
      orderNum: "ABC-1fgasa-fadsf",
      orderTime: "2021.01.01.(월) 오후3시 16분",
      orderinfo: "허니콤보 외 1건",
      orderset: 2,
      orderpay: "33,000",
      order: "주문 완료",
    },
  ],
});

const getters = { //getters가 컴포트?
};

const mutations = {
  setTab(state, tab) {//엑시오스 통신 해서 값을 빼오지 않을까? 교촌의 운양점 사장인데, 교촌 장기점이 나온다. 관계형 db 니까 참조를 사용해서 외래키값으로 판단해서 가지고 오는거죠!!
    state.Tab = tab;
  },
};

const actions = {};

export default { namespaced: true, state, getters, mutations, actions };
