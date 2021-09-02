const state = () => ({
  menu: [
    {
      menu_id: 1,
      menu_name: "등심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: 20000,
      menu_info: "담백하고 준내 맛있다."
    }
    //id 값을 판단하여 옵션 관리에서 카드 클릭후 옵션 추가/삭제
  ],
  menu_checkbox: []
})

const getters = {
  getMenu:(state) => state.menu,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  getChecker: (state) => {
    for (let i = 0; i < state.menu.length(); i++) {
      if (state.menu_checkbox === ){
        return true;
      }
      return false;

    }

  }
}

const mutations = {
  setMenu:(state,value) => state.menu = value,
  setMenu_Checkbox:(state,value) => state.menu =value,
}

const actions = {}

export default {namespaced: true, state, getters, actions, mutations};

