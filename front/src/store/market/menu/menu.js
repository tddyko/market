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
  copy: [],
  updateMenu: [],
  menu_checkbox: [],
  new_menu: ''
})

const getters = {
  getMenu:(state) => state.copy,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  getNew_Menu:(state) => state.new_menu,
  }


const mutations = {
  setMenu:(state,value) => state.menu = value,
  setMenu_Checkbox:(state,value) => {state.menu_checkbox = value},
  setNew_Menu:(state) => {
    state.copy.push("");
  },
  copymenu(state){
    state.copy = state.menu
  },
  setDelete:(state) => {
    const checked = state.menu_checkbox;
/*    if(state.copy.length() !== state.menu.length()){
      state.copy = state.menu;
    } else {
      for (const i of checked) {
        if(!JSON.stringify(state.menu[i]).includes(state.copy[i])){
          state.menu.splice(i, 1, state.copy[i])
        }
      }
    }*/
    for (let i = 0; i<state.menu_checkbox.length; i++){
      console.log(state.menu_checkbox[i])
      for (let j = 0; j < state.menu.length; j++) {
        if(state.menu[j].menu_id === state.menu_checkbox[i]){
            state.menu.splice(j, 1);
        }
      }
    }
    state.menu_checkbox = []
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

