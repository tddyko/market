const state = () => ({
  //첫번째 줄
  Order_DashBoard: [
    {
      color: "cyan darken-3",
      title: "주문건수",
      subtitle: "당일 총 주문건...",
      subContent: "당일 총 주문건수: ",
      subContentValue: 300,
      labels: [
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
      ],
      value: [
        5,
        10,
        20,
        10,
        30,
        80,
        100,
        10,
        30,
        80,
        100,
        100,
      ],},
    {
      color: "cyan lighten-2",
      title: "주문완료",
      subtitle: "당일 총 주문완료건...",
      subContent: "당일 총 주문완료수: ",
      subContentValue: 297,
      labels: [
        '9am',
        '11am',
        '1pm',
        '3pm',
        '5pm',
        '7pm',
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
      ],},
    {
      color: "orange accent-1",
      title: "주문취소",
      subtitle: "당일 총 주문취소건...",
      subContent: "당일 총 주문취소건수: ",
      subContentValue: 3,
      labels: [
        '9am',
        '11am',
        '1pm',
        '3pm',
        '5pm',
        '7pm',
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
      ],}
  ],

  //두번 쨰 줄
  Reserve_DashBoard:[
    {
      color: "black",
      title: "예약건수",
      subtitle: "당일 총 예약건...",
      subContent: "당일 총 예약건수: ",
      subContentValue: 50,
      labels: [
        '9am',
        '11am',
        '1pm',
        '3pm',
        '5pm',
        '7pm',
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
      ],},
    {
      color: "deep-orange accent-1",
      title: "예약완료",
      subtitle: "당일 총 예약완료건...",
      subContent: "당일 총 예약완료건수: ",
      subContentValue: 31,
      labels: [
        '9am',
        '11am',
        '1pm',
        '3pm',
        '5pm',
        '7pm',
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
      ],},
    {
      color: "brown darken-1",
      title: "예약취소",
      subtitle: "당일 총 예약취소건...",
      subContent: "당일 총 예약취소건수: ",
      subContentValue: 19,
      labels: [
        '9am',
        '11am',
        '1pm',
        '3pm',
        '5pm',
        '7pm',
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
