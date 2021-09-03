const state = () => ({
  menu: [
    {
      menu_name: "등심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고  맛있다."
    },
    {
      menu_name: "치즈 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "느끼하고 준내 맛있다."
    },
    {
      menu_name: "안심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "부드럽고 준내 맛있다."
    },
    {
      menu_name: "츠케맨",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "먹고싶다.. 강추"
    },
    {
      menu_name: "돈코츠 라멘",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고 국물이 맛있다."
    }
    //id 값을 판단하여 옵션 관리에서 카드 클릭후 옵션 추가/삭제
  ],
  updateMenu: [],
  menu_checkbox: [],
  new_menu: ''
})

const getters = {
  getMenu:(state) => state.menu,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  getNew_Menu:(state) => state.new_menu,
  }


const mutations = {
  setMenu:(state,value) => state.menu = value,
  setMenu_Checkbox:(state,value) => {state.menu_checkbox = value},
  setNew_Menu:(state) => {
    state.menu.push("");
  },
  setDelete:(state,event) => {
    const test = event.target.index;
    state.menu.splice(test, 1 );
  },
  updateMenu:(state,payload) => {
    const test = payload;
    for (let i = 0; i < test.length(); i++ ){
      if(!JSON.stringify(state.menu[i]).includes(test[i])){
        state.menu.splice(i, 1, test[i])
      }
    }
  }
}

const actions = {}

export default {namespaced: true, state, getters, actions, mutations};

