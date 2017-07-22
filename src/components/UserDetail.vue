<template v-for="user in userListFireBase">     
        <tr>
           <td>{{user.name}}</td>
           <td>{{user.email}}</td>
           <td>{{user.phone}}</td>
           <td>
               <a href="#" class="btn btn-primary" @click.prevent="editDataFireBase(user.id)">Edit</a>
               <a href="#" class="btn btn-danger" @click.prevent="deleteContact(user.id)">Delete</a>
           </td>            
       </tr> 
      
</template>

<script>
import store from '../store/index.js'
import firebase from 'firebase'
import { mapActions,mapMutations,mapState } from 'vuex'
 
  let db = firebase.database();
  let userRef = db.ref('users');

export default {
  name: 'userdetail',    
  props:['user'],
  store,
  firebase: {
    users: userRef
  },
  data () {
    return {     
      userListUpdate: []     
    }
  },
  computed: {
   
  },
  methods: {      
    deleteContact(ID){
        let removeUser = db.ref('users/' + ID);
        console.log(ID);
        removeUser.remove();
        this.$emit('clicked');               
    },
     ...mapMutations([
        'editDataFireBase',
        'getDataFireBase'        
    ])
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
