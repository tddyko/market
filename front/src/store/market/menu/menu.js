const state = () => ({
  menu: [
    {
      menu_id: 1,
      menu_name: "등심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고  맛있다."
    },
    {
      menu_id: 2,
      menu_name: "치즈 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "느끼하고 준내 맛있다."
    },
    {
      menu_id: 3,
      menu_name: "안심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "부드럽고 준내 맛있다."
    },
    {
      menu_id: 4,
      menu_name: "츠케맨",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "먹고싶다.. 강추"
    },
    {
      menu_id: 5,
      menu_name: "돈코츠 라멘",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고 국물이 맛있다."
    }
    //id 값을 판단하여 옵션 관리에서 카드 클릭후 옵션 추가/삭제
  ],
  menu_checkbox: []
})

const getters = {
  getMenu:(state) => state.menu,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  }


const mutations = {
  setMenu:(state,value) => state.menu = value,
  setMenu_Checkbox:(state,value) => {state.menu_checkbox = value},
}

const actions = {}

export default {namespaced: true, state, getters, actions, mutations};

