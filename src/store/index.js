import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
   user : []  
}

const mutations = {
    getUser(user){
        state.user.push(user);
    },
    setDataFireBase(data){
        userRef.push(data);
    },
    getDataFireBase(data){
       
    }
}

const actions = {
    
    getDataFireBase(context){
        context.commit('getDataFireBase')
    },
    setDataFireBase: ({commit}) => commit('setDataFireBase')
    
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    
})


