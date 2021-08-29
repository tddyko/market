const state = () => ({
  dialog: false,
  notifications: false,
  sound: true,
  widgets: false,
  radioGroup: 1,
});

const getters = {
  getdialog : (state) => state.dialog,
  getnotifications : (state) => state.notifications,
  getsound : (state) => state.sound,
  getwidgets : (state) => state.widgets,
  getradioGroup : (state) => state.radioGroup,
};

const mutations = {
  setradioGroup : (state, value) => state.radioGroup = value

};

const actions = {
  setRadioGroup({commit}, value){
    commit('setradioGroup', value);
  },
};


export default { namespaced: true, state,getters,mutations,actions,}
