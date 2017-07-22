import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBr4OfmIDf6CFqRHS942EEfkkGZBB8LPjU",
    authDomain: "vueform-90638.firebaseapp.com",
    databaseURL: "https://vueform-90638.firebaseio.com",
    projectId: "vueform-90638",
    storageBucket: "",
    messagingSenderId: "922841769727"
  };

const app = firebase.initializeApp(config);
let db = app.database();
let userRef = db.ref('users');

Vue.use(Vuex)

const state = {   
   dataFireBase: [],
   dataEditForm: [],
   flagEdit : false  
}

const mutations = {
    addDataFireBase(state, payload){
        userRef.push(payload);
    },
    getDataFireBase(state, payload){       
       let userList = [];      

        userRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {           
                var user = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().name,
                    phone: childSnapshot.val().phone,
                    email: childSnapshot.val().email
                };
                userList.push(user);
            });
        });

      state.dataFireBase = userList;      
    },
    updateDataFireBase(state, payload){
        let modifiRef = db.ref('users/' + payload.idUpdate); 

        delete payload.dataUpdate.id;
        modifiRef.update(payload.dataUpdate);
        window.swal({
                        title: "Congratulation!",
                        text: "You have updated successfully",
                        type: "warning",
                        confirmButtonText: "Close",
                        confirmButtonColor: "skyblue"
          });
        
    },
    deleteDataFireBase(state, payload){
        let removeUser = db.ref('users/' + payload);
       
        removeUser.remove();
    },
    editDataFireBase(state, payload){
        let id = payload;
        let updateUser = db.ref('users/' + id);       
        let userListUpdate = [];

        updateUser.once('value', function(snapshot) {            
                var user = {   
                    id: snapshot.key,           
                    name: snapshot.val().name,
                    phone: snapshot.val().phone,
                    email: snapshot.val().email
                };                
                userListUpdate.push(user);           
        });
       
      state.dataEditForm = userListUpdate;     
      state.flagEdit = true;        
    },
    cancelEditForm(){
        state.flagEdit = false;
    }
}

const actions = {    
    getDataFireBase: ({commit}) => commit('getDataFireBase'),
    updateDataFireBase: ({commit}) => commit('updateDataFireBase'),
    deleteDataFireBase: ({commit}) => commit('deleteDataFireBase'),
    editDataFireBase: ({commit}) => commit('editDataFireBase')
    
}

export default new Vuex.Store({
    state,
    actions,
    mutations    
})


