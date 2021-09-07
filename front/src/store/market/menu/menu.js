import axios from 'axios'
const state = () => ({
  menu: [ ],
  updateMenu: [],
  menu_checkbox: [],
  new_menu: '',
  menu_card_dialog: false,
  menu_option: [],
  option_name: ''
})

const getters = {
  getMenu:(state) => state.menu,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  getNew_Menu:(state) => state.new_menu,
  getMenu_Dialog: (state) =>  state.menu_card_dialog,

  getMenu_option_name: (state) => {
          for (let i = 0; i < state.menu.length; i++) {
            state.menu_option[i] = state.menu[i].menu_name;
          }
          return state.menu_option;
  },
  getMenu_Option:(state) => state.option_name
}

const mutations = {
  setMenu_Dialog: (state) => {
    if(state.menu_checkbox.length>0)
      state.menu_card_dialog = !state.menu_card_dialog
  },
  setMenu:(state,value) => state.menu = value,
   setMenu_option: (state, value) => {
      state.option_name = value
    },
  setMenu_Checkbox:(state,value) => state.menu_checkbox = value ,
  setNew_Menu:(state,data) => {
    state.menu.push({product_id : null ,name : '',price : '', product_info : ''});
  },
  setDelete:(state,event) => {
     for(let index of state.menu_checkbox){
        let selectMenu = state.menu[index]
        console.log(selectMenu)
        axios({
          url :`http://localhost/menu/delete/${selectMenu.product_id}`,
          method : 'delete',
          withCredentials : 'true',
        })
     }
  },
  updateMenu:(state,payload) => {
    console.log(state.menu)
    for(let index of state.menu_checkbox){
      let selectMenu = state.menu[index]
      let formData = new FormData();
      formData.append("name",selectMenu.name)
      formData.append("price",selectMenu.price)
      formData.append("product_info",selectMenu.product_info)
      try{
        formData.append("menuImg", selectMenu.menuImg);
      }catch{}
      axios.post(`http://localhost/menu/update/${selectMenu.product_id}`,formData,
      {
        withCredentials: true,
        headers : {'Content-Type': 'multipart/form-data'}
      }).then((res)=>{})
      .catch((err)=>console.log(err))
    }
  },
  tempMenu(state,data){
    let findOne = state.menu[data.index]
    findOne[data.property] = data.value
  }
}

const actions = {
  actMenu:({commit},value)=>{
    axios({
      url:'http://localhost/menu/myMarket/menuList',
      method :'get',
      withCredentials : 'true'
    }).then(async(res)=>{
       commit("setMenu",res.data)
    })
  },
  actUpdate : ({commit},value)=>{
    commit("tempMenu",value)
  }
}

export default {namespaced: true, state, getters, actions, mutations};

