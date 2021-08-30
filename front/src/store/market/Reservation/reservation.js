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
  Reservation_List_Headers: [
    {text: '예약번호', align: 'center', sortable: false, value: 'reservation_id',},
    {text: '예약날짜', value: 'reserve_date', align: 'center'},
    {text: '예약시간', value: 'reserve_time', align: 'center'},
    {text: '예약인원', value: 'order_count', align: 'center'},
    {text: '예약상태', value: 'current_state', align: 'center'},
  ],
  Reservation_List_Items:[
  ],
  Reservation_Review: [
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

const getters = {

};

const mutations = { //변이!(데이터가 바꾸어야할때의 구현부) 메소드 정의!
  setTab(state, tab) {
    state.Tab = tab; //그거랑 똑같고
  },
};

const actions = {}; // 내가 변이를 할때! 확정을 지어줄때 커밋할때

export default { namespaced: true, state, getters, mutations, actions };