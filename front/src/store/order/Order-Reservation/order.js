const state = () => ({
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
  Order_List_headers: [
    {text: '예약번호', align: 'center', sortable: false, value: 'ReservationNum',},
    {text: '예약시간', value: 'ReservationTime', align: 'center'},
    {text: '예약내역', value: 'Reservationinfo', align: 'center'},
    {text: '예약인원', value: 'Reservationset', align: 'center'},
    {text: '예약상태', value: 'Reservation', align: 'center'},
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

const getters = {
  Get_Tab_Header(state) {
    return state.Tab_Headers;
  },
  Get_List_Header(state) {
    return state.Order_List_Headers;
  },
  Get_List_Items(state) {
    return state.Order_List_Items;
  },
};

const mutations = { //변이!(데이터가 바꾸어야할때의 구현부) 메소드 정의!
  setTab(state, tab) {
    state.Tab = tab; //그거랑 똑같고
  },
};

const actions = {}; // 내가 변이를 할때! 확정을 지어줄때 커밋할때

export default { namespaced: true, state, getters, mutations, actions };
