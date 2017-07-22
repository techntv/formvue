<template>     
        <tr>
           <td>{{user.name}}</td>
           <td>{{user.email}}</td>
           <td>{{user.phone}}</td>
           <td>
               <a href="#" class="btn btn-primary" @click.prevent="editContact(user.id)">Edit</a>
               <a href="#" class="btn btn-danger" @click.prevent="deleteContact(user.id)">Delete</a>
           </td>            
       </tr> 
      
</template>

<script>
import firebase from 'firebase'

 
  let db = firebase.database();
  let userRef = db.ref('users');

export default {
  name: 'userdetail',    
  props:['user','flagEdit'],
  firebase: {
    users: userRef
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userListUpdate: []     
    }
  },
components: {
    
},
  methods: {   
    deleteContact(ID){
        let removeUser = db.ref('users/' + ID);
        console.log(ID);
        removeUser.remove();
        this.$emit('clicked');               
    },
    editContact(ID){
       
        let updateUser = db.ref('users/' + ID);

        var self = this;
        self.userListUpdate = [];
        updateUser.once('value', function(snapshot) {            
                var user = {   
                    id: snapshot.key,           
                    name: snapshot.val().name,
                    phone: snapshot.val().phone,
                    email: snapshot.val().email
                };                
                self.userListUpdate.push(user);           
        });
       
       console.log(self.userListUpdate[0].email);

        this.$emit('flagEdit', [true, self.userListUpdate]);        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
