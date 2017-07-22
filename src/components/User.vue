<template>
    <div class="user">
      <div class="container">
        <h3>Contact List</h3>
      <table class="table table-striped">
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
        </thead>
          <tbody>
            <userdetail v-for="user in $store.state.user" :user="user" :key="user.name" @clicked="getDataFireBase" @flagEdit="flagEditControl"></userdetail>
          </tbody>
      </table>
        <editform v-if="flagEdit" @clicked="getDataFireBase" :userListUpdate="userListUpdate"></editform>
      </div>
    </div>
</template>

<script>
import store from '../store/index.js'
import UserDetail from '@/components/UserDetail.vue'
import EditForm from '@/components/EditForm.vue'

import firebase from 'firebase'
let db = firebase.database();
let userRef = db.ref('users');

export default {
  name: 'user',
  store,  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userList : [],  
      flagEdit: false,
      userListUpdate: []   
    }
  },
  components: {
    'userdetail': UserDetail,
    'editform': EditForm
  },
  methods: {
    getDataFireBase (){
      var self = this;
       self.userList = [];

        userRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {           
                var user = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().name,
                    phone: childSnapshot.val().phone,
                    email: childSnapshot.val().email
                };

                self.userList.push(user);
            });
        });

      console.log(self.userList);
      store.state.user = self.userList;
       this.flagEdit = false; 
    },
    flagEditControl(data){
      this.userListUpdate = [];
      if(data != undefined){
          this.flagEdit = data[0];    
          this.userListUpdate = data[1]; 
          console.log(data);
      }      
    }
  },
  created(){
    this.getDataFireBase();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
