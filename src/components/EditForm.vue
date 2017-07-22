<template>     
       <form class="form-horizontal">       
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" placeholder="Your Name"             
            v-model="dataEditForm[0].name"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"
            
             v-model="dataEditForm[0].email">
          </div>
        </div>

        <div class="form-group">
          <label for="phone" class="col-sm-2 control-label">Phone</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="phone" placeholder="Your Phone"
            
             v-model="dataEditForm[0].phone">
          </div>
        </div>        

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-success" @click.prevent="updateUser({dataUpdate: dataEditForm[0], idUpdate: dataEditForm[0].id})">Update</button>
             <button type="submit" class="btn btn-danger" @click.prevent="cancelUpdate">Cancel</button>           
          </div>
        </div>
      
        
      </form>
</template>

<script>
import store from '../store/index.js'
import { mapActions,mapMutations,mapState } from 'vuex'
 

export default {
  name: 'userdetail',
  props: ['userListUpdate'],
  store,  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',        
    }
  },
  computed: {
      dataEditForm(){
        return this.$store.state.dataEditForm;
      }
  },
  methods: {      
    updateUser(payload){
        this.updateDataFireBase(payload);  
        this.getDataFireBase();     
    },
    cancelUpdate(){
        this.cancelEditForm();
    },
    ...mapMutations([
        'updateDataFireBase',
        'getDataFireBase',
        'cancelEditForm'              
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
