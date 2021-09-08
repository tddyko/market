import axios from 'axios'
const state = () => ({
  menu: [ ],
  updateMenu: [],
  menu_checkbox: [],
  new_menu: '',
  menu_card_dialog: false,
  option_card_dialog: false,
  menu_option: [],
  option_name: '',
  menu_option_name: [],
  option_checkbox: [],
  option_item_checkbox :[],
  option_select_name: '',
  selectMenuId :'',
  deleteOptions : []
})

const getters = {
  getMenu:(state) => state.menu,
  getMenu_Checkbox:(state) => state.menu_checkbox,
  getOption_Checkbox: (state) => state.option_checkbox,
  getOption_item_checkbox: (state) => state.option_item_checkbox,
  getNew_Menu:(state) => state.new_menu,
  getMenu_Dialog: (state) =>  state.menu_card_dialog,
  getOption_Dialog: (state) =>  state.option_card_dialog,
  getMenu_option_name: (state) => {
      return state.menu_option_name;
  },
  getMenu_Option:(state) => state.menu_option,
  getOption_Select_Name: (state) => state.option_select_name,
  getDeleteOptions : (state) => state.deleteOptions,
  getSelectMenuId : (state) =>state.selectMenuId
}

const mutations = {
  setMenu_Dialog: (state) => {
     if(state.menu_checkbox.length>0)
      state.menu_card_dialog = !state.menu_card_dialog
  },
  setOption_Dialog: (state) => {
       if(state.option_checkbox.length>0)
        state.option_card_dialog = !state.option_card_dialog
  },
  setMenu:(state,value) => state.menu = value,
  setMenu_Option: (state,value) =>  {
    state.menu_option = value
    state.option_checkbox=[]
  },
  setMenu_Option_items : (state,value)=>{
    state.menu_option[value].Pd_options.push({name : '', price : ''})
  },
  setOption_Checkbox: (state, value) => state.option_checkbox = value,
  setOption_item_checkbox:(state,value) => state.option_item_checkbox = value,
  setMenu_Checkbox:(state,value) => state.menu_checkbox = value ,
  setNew_Menu:(state,data) => {
    state.menu.push({product_id : null ,name : '',price : '', product_info : ''});
  },
  setNewGroup:(state,data)=>{
    state.menu_option.push({Pd_options :[], name : '', pd_option_group_id : ''})
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
  },
  tempOption(state,data){
      let findOne = state.menu_option[data.index].Pd_options
      findOne[data.optionIndex][data.property] = data.value
      console.log(state.menu_option[data.index])
  },
  tempOptionGroup(state,data){
    state.menu_option[data.index].name = data.value
  },
  setOption_Select_Name: (state, value) => {
     state.option_select_name = value
  },
  setSelectedMenuId : (state,value) => state.selectMenuId = value
}

const actions = {
  actDeleteOption_items({state},value){
      console.log("setDeleteOption : " + state.option_item_checkbox)
      state.deleteOptions =[]
      for(let index of state.option_item_checkbox){
        state.deleteOptions.push(state.menu_option[value].Pd_options[index])
        state.menu_option[value].Pd_options.splice(index,1)
      }
      state.option_item_checkbox = []
  },
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
  },
  actOptionUpdate : ({commit},value)=>{
      commit("tempOption",value)
  },
  actUpdateOptionGroup:({commit},value)=>{
    commit("tempOptionGroup",value)
  },
  actOptionGroup : ({getters},value)=>{
     for(let index of getters.getOption_Checkbox){
           axios({
              url : `http://localhost/menu_option/updateOptionGroup/${getters.getSelectMenuId}`,
              method : 'post',
              withCredentials : true,
                data : {
                  name : getters.getMenu_Option[index].name
                }
           })
     }
  },
  actOption_Select_Name :({commit},value)=>{
    axios({
      url : `http://localhost/menu_option/list/optionGroup/${value}`,
      method : 'get',
      withCredentials : true
    }).then(async(res)=>{
      if(res.data)
      commit("setOption_Select_Name",res.data)
    })
  },
  actMenu_Option :({commit},value)=>{
    axios({
      url : `http://localhost/menu_option/list/GroupAndOptions/${value}`,
      method : 'get',
      withCredentials : true
    }).then(async(res)=>{
      if(res.data)
      commit("setMenu_Option",res.data)
    })
  },

  actMenu_Options({getters},value){
    for(let id of getters.getOption_item_checkbox){
     let selectOption = getters.getMenu_Option[value]
        axios({
           url :`http://localhost/menu_option/updateOption/${selectOption.pd_option_group_id}/${selectOption.Pd_options[id].pd_option_id}`,
           method : 'post',
           withCredentials : true,
           data :{
              name : selectOption.Pd_options[id].name,
              price : selectOption.Pd_options[id].price,
           }
        })
    }
    for(let item of getters.getDeleteOptions){
      axios({
               url :`http://localhost/menu_option/delete/options/${item.pd_option_id}`,
               method : 'get',
               withCredentials : 'true',
      }).then(async(res)=>{
      }).catch((err)=>{console.log(err)})
    }
  },
  actDeleteOption({getters},value){
    for(let index of getters.getOption_Checkbox){
         axios({
             url :`http://localhost/menu_option/delete/option_group/${getters.getMenu_Option[index].pd_option_group_id}`,
             method : 'get',
             withCredentials : true,
           }).then(async(res)=>{
         }).catch((err)=>{console.log(err)})
    }
  },
  actSelectedMenuId({commit},value){
    commit('setSelectedMenuId',value)
  }
}

export default {namespaced: true, state, getters, actions, mutations};

