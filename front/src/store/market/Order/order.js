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
  Order_Review: [
    {
      Avatar_img: "블라블라블라",
      Nickname: "문스윙스씨",
      Rating: 5,
      Date_issue: "2021년 8월 23일",
      Review: "yo 지금 족발집 어려요. 나도 어려요. 근데 족발집 내 사회인생보다 엄청나게 어려요 우리 사장님 지금 하고잇는 일이 엄청 어려울 수 있다는 거 알고 분명히 여러가지 생각을 한적 있을거에요. Yo Sh*t 그거 다 그래 절대 포기하지마요 끝까지 가는 사장님이 다 이겨요 우사인 봁. 우사인 봁. 우사인 볼트가 세계에서 왜 제일 다달리기 빠른 사람인줄 알아요? 끝까지 갔기 떄문이에요. "
    },
    {
      Avatar_img: "블라블라블라",
      Nickname: "KMH",
      Rating: 4,
      Date_issue: "2021년 8월 22일",
      Review: "마시쩡"
    },
    {
      Avatar_img: "블라블라블라",
      Nickname: "이범수",
      Rating: 1,
      Date_issue: "2021년 8월 22일",
      Review: "어우 너무 달아 이빨 썩는맛"
    },
    {
      Avatar_img: "블라블라블라",
      Nickname: "권예나",
      Rating: 1,
      Date_issue: "2021년 8월 22일",
      Review: "지금까지 이런 맛은 없었다. 이것은 갈비인가 통닭인가."
    }
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
