import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userInfo:{}
    },
    getters:{
        getUserInfo(state){
            return state.userInfo;
        }
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo = userInfo;
        }
    },
    actions:{
        setUserInfo({commit},userInfo){
            commit('setUserInfo',userInfo);
        }
    }

})

export default const store = new Vuex.Store({
