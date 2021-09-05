import axios from 'axios'
const state = () => ({
  menu: [
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
  setMenu_Checkbox:(state,value) => state.menu_checkbox = value ,
  setNew_Menu:(state) => {
    state.menu.push({name : '',price : '', product_info : ''});
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
//     const test = event.target.index;
//     state.menu.splice(test, 1 );
  },
  updateMenu:(state,payload) => {
    for(let index of state.menu_checkbox){
    let selectMenu = state.menu[index]
      axios({
        url :`http://localhost/menu/update/${selectMenu.product_id}`,
        method : 'put',
        withCredentials : 'true',
        data :{
          name : selectMenu.name,
          price : selectMenu.price,
          product_info : selectMenu.product_info
        }
      })
    }
  },
  tempMenu(state,data){
    let findOne = state.menu[data.index]
    findOne[data.property] = data.value
    console.log('값 바뀜')
    console.log(findOne)
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

