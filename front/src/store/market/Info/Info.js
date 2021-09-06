const state = () => ({
  week: [
    "첫재 주", "둘째 주", "셋째 주", "넷째 주"
  ],
  day: [
    "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"
  ],
  Tab: null,
  Tab_Headers: [
    {
      Header: "운영정보",
    },
    {
      Header: "공지사항",
    },
    {
      Header: "메뉴관리",
    },
    {
      Header: "사이드메뉴관리",
    },
    {
      Header: "좌석관리",
    },
  ],
  notice : null,
  information : null,
  phonenumber : null,
  Close_Time: null,
  Open_Time: null,
  Open_Time_Menu: false,
  Close_Time_Menu: false,
  Info_Image:[
    //이미지 미리보기
  ],
  profile_img : [] ,
  Notice_Image : [],
  week_holiday : null,
  day_holiday : null,
})
const getters = {
  Get_Info_Tab(state) {
    return state
  },
  Get_Week(state) {
    return state.week;
  },
  Get_Day(state) {
    return state.day;
  },
  Get_Tab(state) {
    return state.Tab;
  },
  Get_Tab_Headers(state) {
    return state.Tab_Headers;
  },
  Get_Open_Time(state) {
    return state.Open_Time;
  },
  Get_Close_Time(state) {
    return state.Close_Time;
  },
  Get_Open_Time_Menu(state) {
    return state.Open_Time_Menu;
  },
  Get_Close_Time_Menu(state) {
    return state.Close_Time_Menu;
  },
  Get_Info_Operrational_img:(state) => state.Info_Image,
  Get_profile_img:(state) => state.profile_img,
  Get_information :(state)=> state.information,
  Get_notice:(state) => state.notice,
  Get_phonenumber:(state) => state.phonenumber,
  Get_notice_img: (state) => state.Notice_Image,
  }
};

const mutations = {
  Set_Info_Tab(state, value) {
    state.Tab = value;
  },
  Set_Open_Time(state, value) {
    state.Open_Time = value;
  },
  Set_Close_Time(state, value) {
    state.Close_Time = value;
  },
  Set_Open_Time_Menu(state, value) {
    state.Open_Time_Menu = value;
  },
  Set_Close_Time_Menu(state, value) {
    state.Close_Time_Menu = value;
  },
  Update_Open_Time_Menu(state) {
    if (parseInt(state.Open_Time.toString().substring(0, 2)) > 12) {
      state.Open_Time = '오후 ' + (parseInt(state.Open_Time)- 12) + state.Open_Time.toString().substring(2, 5);
    } else if (parseInt(state.Open_Time.toString().substring(0, 2)) < 10) {
      state.Open_Time = '오전 ' + state.Open_Time.toString().substring(1, 2) + state.Open_Time.toString().substring(2, 5);
    } else {
      state.Open_Time = '오후 ' + state.Open_Time;
    }
    state.Open_Time_Menu = false;
  },
  Update_Close_Time_Menu(state) {
    if (parseInt(state.Close_Time.toString().substring(0, 2)) > 12) {
      state.Close_Time = '오후 ' + (parseInt(state.Close_Time)- 12) + state.Close_Time.toString().substring(2, 5);
    } else if (parseInt(state.Close_Time.toString().substring(0, 2)) < 10) {
      state.Close_Time = '오전 ' + state.Close_Time.toString().substring(1, 2) + state.Close_Time.toString().substring(2, 5);
    } else {
      state.Close_Time = '오후 ' + state.Close_Time;
    }
    state.Close_Time_Menu = false;
  },
  Set_Info_Image(state,value){
    state.Info_Image = value;
  },
  Set_Profile_Image(state,value){
    state.profile_img = value;
  },
  Set_information :(state,value)=> state.information = value,
  Set_notice:(state,value) => state.notice = value,
  Set_notice_img: (state,value)=> state.Notice_Image = value,
  Set_phonenumber:(state,value) => state.phonenumber = value,
  Set_week_holiday : (state,value)=> state.week_holiday = value,
  Set_day_holiday: (state,value) => state.day_holiday = value,
};

const actions = {
  Info_Set_Tab_Actions({commit}, value) {
    commit("Set_Info_Tab", value);
  },
  Info_Set_Open_Time_Actions({commit}, value){
    commit("Set_Open_Time", value);
  },
  Info_Set_Close_Time_Actions({commit}, value) {
    commit("Set_Close_Time", value);
  },
  Info_Set_Open_Time_Menu({commit}, value) {
    commit("Set_Open_Time_Menu", value)
  },
  Info_Set_Close_Time_Menu({commit}, value) {
    commit("Set_Close_Time_Menu", value)
  },
  Info_Set_information({commit}, value){
    commit("Set_information", value)
  },
  Info_Set_notice({commit}, value){
    commit("Set_notice", value)
  },
  Info_Set_phonenumber({commit}, value){
    commit("Set_phonenumber", value)
  },

  send_infor_values({state}){
    console.log("sendInforVlaues actions")
    let formData = new FormData();
    if(state.profile_img.length > 0)
    formData.append("profile_img", state.profile_img);
    if(state.Info_Image.length>0)
    for(const index in state.Info_Image)
      formData.append("info_img", state.Info_Image[index])
    console.log(state.Open_Time)
    if(state.Open_Time.substring(0,2) == "오전")
      formData.append("start_time", state.Open_Time.substring(3));
    else
      formData.append("start_time",
      (parseInt(state.Open_Time.substring(3))+12)+state.Open_Time.substring(5));

    if(state.Close_Time.substring(0,2) == "오전")
      formData.append("end_time", state.Close_Time.substring(3));
    else
      formData.append("end_time",
      (parseInt(state.Close_Time.substring(3))+12)+state.Close_Time.substring(5));
    formData.append("market_phone", state.phonenumber)
    formData.append("market_coment",state.information);
    formData.append("market_inform_week_holiday",state.week_holiday);
    formData.append("market_inform_day_holiday",state.day_holiday);
    axios.post('http://localhost/mymarket/update/inform',formData,{
      withCredentials: true,
      headers : {'Content-Type': 'multipart/form-data'}
    }).then((res)=>
      console.log(res)
    ).catch((err)=>console.log(err))
  },
  sendNotices:({state})=>{
    let formData = new FormData();
    for(const key in state.Notice_Image) {
      formData.append("noti_img", state.Notice_Image[key]);
    }
    formData.append("market_noti", state.notice);
    axios.post('http://localhost/mymarket/update/notice',formData,{
      withCredentials: true,
      headers : {'Content-Type': 'multipart/form-data'}
    }).then((res)=>
      {  }
    ).catch((err)=>console.log(err))
  }


};

export default {namespaced: true, state, getters, actions, mutations}
