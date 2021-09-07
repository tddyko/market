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
          Pd_option_groups_id: 1,
          name: "사이즈",
          Pd_options: [
            {
              name: "소",
              price: "500"
            },
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
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
          Pd_option_groups_id: 2,
          name: "사이즈",
          Pd_options: [
            {
              name: "소",
              price: "500"
            },
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
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
          Pd_option_groups_id: 3,
          name: "사이즈",
          Pd_options: [
            {
              name: "소",
              price: "500"
            },
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
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
          Pd_option_groups_id: 4,
          name: "사이즈",
          Pd_options: [
            {
              name: "소",
              price: "500"
            },
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
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
          Pd_option_groups_id: 5,
          name: "사이즈",
          Pd_options: [
            {
              name: "소",
              price: "500"
            },
            {
              name: "중",
              price: "1000"
            },
            {
              name: "대",
              price: "1500"
            },
          ]
        }
      ],
    }
    //id 값을 판단하여 옵션 관리에서 카드 클릭후 옵션 추가/삭제
  ],
  copy: [],
  updateMenu: [],
  menu_checkbox: [],
  option_checkbox: [],
  menu_card_dialog: false,
  insert_menu: {
    menu_id: null,
    menu_name: null,
    menu_img: null,
    menu_price: null,
    menu_info: null,
  },
  insert_option:{
    Pd_option_groups_id: 0,
    name: "",
    Pd_options: [
      {
        name: "",
        price: ""
      }
    ]
  },
  menu_option_name: [],
  menu_option:[],
  option_select_name: ''
})

const getters = {
  getCopy: (state) => state.copy,

  getMenu_Option: (state) => state.menu_option,

  getMenu_Checkbox: (state) => state.menu_checkbox,

  getMenu_Dialog: (state) => state.menu_card_dialog,

  getOption_Checkbox: (state) => state.option_checkbox,

  getOption_Dialog: (state) => state.menu_card_dialog,

  getMenu_option_name: (state) => {
    state.menu.forEach((item,index) => {
      state.menu_option_name[index] = item.menu_name;
    })
    return state.menu_option_name;
  },

  getOption_Select_Name: (state) => state.option_select_name

}
const mutations = {
  setMenu: (state, value) => state.copy = value,

  setMenu_Checkbox: (state, value) => {
    state.menu_checkbox = value
  },

  setOption_Select_Name: (state, value) => {
    state.option_select_name = value
  },

  setOption_Checkbox: (state, value) => state.option_checkbox = value,

  setMenu_Option: (state) => {
    state.menu.forEach((item) => {
      console.log(item)
        if (state.option_select_name === item.menu_name)
          state.menu_option = item.Pd_option_groups
      }
    )
  },

  setMenu_Dialog: (state) => state.menu_card_dialog = !state.menu_card_dialog,

  setInsert_Menu: (state) => {
    const insert_menu = state.insert_menu;
    let num = null;
    for (let i = 0; i < state.copy.length; i++) {
      num = state.copy[i].menu_id;
    }
    insert_menu.menu_id = num + 1
    state.copy.push(insert_menu);
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

