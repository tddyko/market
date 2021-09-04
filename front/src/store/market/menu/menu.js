const state = () => ({
  menu: [
    {
      menu_id: 1,
      menu_name: "등심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고  맛있다.",
      Pd_option_groups: [
        {
          name: "사이즈",
          Pd_options: [
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
            {
              name: "소",
              price: "500"
            }
          ]
        }
      ],
    },
    {
      menu_id: 2,
      menu_name: "치즈 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "느끼하고 준내 맛있다.",
      Pd_option_groups: [
        {
          name: "사이즈", // 대분류
          Pd_options: [ // 소분류 들
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
            {
              name: "소",
              price: "500"
            }
          ]
        }
      ],
    },
    {
      menu_id: 3,
      menu_name: "안심 가츠",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "부드럽고 준내 맛있다.",
      Pd_option_groups: [
        {
          name: "사이즈",
          Pd_options: [
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
            {
              name: "소",
              price: "500"
            }
          ]
        }
      ],
    },
    {
      menu_id: 4,
      menu_name: "츠케맨",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "먹고싶다.. 강추",
      Pd_option_groups: [
        {
          name: "사이즈",
          Pd_options: [
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
            {
              name: "소",
              price: "500"
            }
          ]
        }
      ],
    },
    {
      menu_id: 5,
      menu_name: "돈코츠 라멘",
      menu_img: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      menu_price: '20,000원',
      menu_info: "담백하고 국물이 맛있다.",
      Pd_option_groups: [
        {
          name: "사이즈",
          Pd_options: [
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
            {
              name: "소",
              price: "500"
            }
          ]
        }
      ],
    }
    //id 값을 판단하여 옵션 관리에서 카드 클릭후 옵션 추가/삭제
  ],
  copy: [],
  updateMenu: [],
  menu_checkbox: [],
  menu_card_dialog: false,
  pushmenu: {
    menu_id: null,
    menu_name: null,
    menu_img: null,
    menu_price: null,
    menu_info: null,
  },
  menu_option: [],
  option_name: ''
})

const getters = {
  getMenu: (state) => state.copy,
  getMenu_Checkbox: (state) => state.menu_checkbox,
  getMenu_Dialog: (state) => state.menu_card_dialog,
  getMenu_option_name: (state) => {
    for (let i = 0; i < state.menu.length; i++) {
      state.menu_option[i] = state.menu[i].menu_name;
    }
    return state.menu_option;
  },
  getMenu_Option:(state) => state.option_name

}
const mutations = {
  setMenu: (state, value) => state.copy = value,
  setMenu_option: (state, value) => {
    state.option_name = value
  },
  setMenu_Checkbox: (state, value) => {
    state.menu_checkbox = value
  },
  setMenu_Dialog: (state) => state.menu_card_dialog = !state.menu_card_dialog,
  setNew_Menu: (state) => {
    const pushmenu = state.pushmenu;
    let num = null;
    for (let i = 0; i < state.copy.length; i++) {
      num = state.copy[i].menu_id;
    }
    pushmenu.menu_id = num + 1
    state.copy.push(pushmenu);
  },

  copymenu(state) {
    state.copy = state.menu
  },

  setDelete: (state) => {
    for (let i = 0; i < state.menu_checkbox.length; i++) {
      for (let j = 0; j < state.copy.length; j++) {
        if (state.copy[j].menu_id === state.menu_checkbox[i]) {
          state.copy.splice(j, 1);
        }
      }
    }
    state.menu = state.copy;
    console.log('menu:')
    console.log(state.menu)
    state.menu_checkbox = []
  },

  updateMenu: (state) => {
    for (let i = 0; i < state.menu_checkbox.length; i++) {
      for (let j = 0; j < state.copy.length; j++) {
        if (state.copy[j].menu_id === state.menu_checkbox[i]) {
          console.log(state.copy[j]);
          state.menu[j] = state.copy[j]
        }
      }
    }
  }

}

const actions = {}

export default {namespaced: true, state, getters, actions, mutations};

