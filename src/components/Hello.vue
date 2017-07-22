<template>
  <div class="hello">
    <div class="container">
      
      <form class="form-horizontal">
        <h3 class="text-center">Sign Up Now and keep in touch with us</h3>
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="newUser.name">
          </div>
        </div>

        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="newUser.email">
          </div>
        </div>

        <div class="form-group">
          <label for="phone" class="col-sm-2 control-label">Phone</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="phone" placeholder="Your Phone" v-model="newUser.phone">
          </div>
        </div>        

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default" @click.prevent="addUser">Sign Up</button>
           <router-link to="/user"><button class="btn btn-primary">View Database User</button></router-link>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import store from '../store/index.js'
  import firebase from 'firebase'
  import {    
    mapActions,mapMutations    
  } from 'vuex'

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

export default {
  name: 'hello',  
  store, 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: 0,
      newUser: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {   
    addUser() {
      var self = this;      
      if(self.newUser.name == ''){
         window.swal({
                        title: "Alert!",
                        text: " You should insert your name",
                        type: "warning",
                        confirmButtonText: "Close",
                        confirmButtonColor: "red"
          });
      }else if(self.newUser.email == ''){
         window.swal({
                        title: "Alert!",
                        text: " You should insert your email",
                        type: "warning",
                        confirmButtonText: "Close",
                        confirmButtonColor: "red"
          });
      }else if(self.newUser.phone == ''){
         window.swal({
                        title: "Alert!",
                        text: " You should insert your phone",
                        type: "warning",
                        confirmButtonText: "Close",
                        confirmButtonColor: "red"
          });
      } else {     
        
        userRef.push(self.newUser);
        
        window.swal({
                        title: "Congraduation!",
                        text: "You have signed up successfully",
                        type: "warning",
                        confirmButtonText: "Close",
                        confirmButtonColor: "skyblue"
          });
        this.newUser.name = '';
        this.newUser.email = '';
        this.newUser.phone = '';
      } 
    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form{
    padding: 25px 25px 25px 0;
    background: skyblue;
  }
  h3{
    margin-bottom: 20px;
  }
  .hello{
    margin-top: 40px;
  }
</style>
