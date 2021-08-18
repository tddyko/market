const state = () => ({
  drawer: true,
  items: [
    {title: '대시보드', icon: 'mdi-view-dashboard', to: '/market'},
    {title: '주문관리', icon: 'mdi-clipboard-text', items:[
        {title: '주문내역', icon: 'mdi-clipboard-text', to: '/market/order'},
        {title: '리뷰관리', icon: 'mdi-clipboard-text'}
      ]},
    {title: '예약관리', icon: 'mdi-account-multiple-outline', items:[
        {title: '주문내역', icon: 'mdi-clipboard-text', to: '/market/reservation'},
        {title: '리뷰관리', icon: 'mdi-clipboard-text'}
      ]},
    {title: '기본정보', icon: 'mdi-clipboard-text'}
  ],
})
const getters = {
  getDrawer: state => state.drawer
}
const mutations = {
  setDrawer(state, data) {
    state.drawer = data
  }
}
const actions = {
  toggleDrawer ({ commit }, value) {
    commit('setDrawer', value)
  }
}

export default { namespaced: true, state, getters, mutations, actions }
