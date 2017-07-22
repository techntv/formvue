<template>     
        <tr>
           <td>{{user.name}}</td>
           <td>{{user.email}}</td>
           <td>{{user.phone}}</td>
           <td>
               <a href="#" class="btn btn-primary" @click.prevent="editData(user.id)">Edit</a>
               <a href="#" class="btn btn-danger" @click.prevent="deleteContact(user.id)">Delete</a>
           </td>            
       </tr> 
      
</template>

<script>
import store from '../store/index.js'
import { mapActions,mapMutations,mapState } from 'vuex'
 

export default {
  name: 'userdetail',    
  props:['user'],
  store,  
  data () {
    return {     
      userListUpdate: []     
    }
  },
  methods: {      
    deleteContact(ID){ 
      this.deleteDataFireBase(ID);
      this.getDataFireBase();
    },
    editData(ID){
      this.editDataFireBase(ID);
    },
     ...mapMutations([
        'editDataFireBase',
        'getDataFireBase',
        'deleteDataFireBase',
        'cancelEditForm'        
    ])
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
