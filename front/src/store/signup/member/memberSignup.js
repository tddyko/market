import axios from 'axios'
const state = () => ({});

const getters = {};

const mutations = {};

const actions = {
  signUp({commit},value){
  console.log('signUp')

    axios({
      url : `http://localhost/signup/member${value.state}`,
      method :'post',
      data : {
        'id':value.id,
        password:value.password,
        name:value.name,
        birthday:value.birthday,
        email:value.email,
        nickname:value.nickname,
        phonenumber : value.phonenumber,
        zipcode:value.zipcode,
        address:value.address,
        dt_address:value.dt_address
      }
    })

  }
};

export default { namespaced: true, state, getters, mutations, actions };
