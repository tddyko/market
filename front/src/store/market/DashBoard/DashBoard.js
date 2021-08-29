const state = () => ({
  //첫번째 줄
  Order_DashBoard: [
    {
      color: "cyan darken-3",
      title: "주문건수",
      subtitle: "당일 총 주문건...",
      subContent: "당일 총 주문건수: 300건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],},
    {
      color: "cyan lighten-2",
      title: "주문완료",
      subtitle: "당일 총 주문완료건...",
      subContent: "당일 총 주문완료수: 297건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],},
    {
      color: "orange accent-1",
      title: "주문취소",
      subtitle: "당일 총 주문취소건...",
      subContent: "당일 총 주문취소건수: 3건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],}
  ],

  //두번 쨰 줄
  Reserve_DashBoard:[
    {
      color: "black",
      title: "예약건수",
      subtitle: "당일 총 예약건...",
      subContent: "당일 총 예약건수: 50건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],},
    {
      color: "deep-orange accent-1",
      title: "예약완료",
      subtitle: "당일 총 예약완료건...",
      subContent: "당일 총 예약완료건수: 31건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],},
    {
      color: "brown darken-1",
      title: "예약취소",
      subtitle: "당일 총 예약취소건...",
      subContent: "당일 총 예약취소건수: 19건",
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],}
  ]
});
const getters = {
  get_Order_DashBoard : (state) => state.Order_DashBoard,
  get_Reserve_DashBoard : (state) => state.Reserve_DashBoard,

};

const mutations = {};

const actions = {
};

export default { namespaced:true, state, getters, mutations, actions};
