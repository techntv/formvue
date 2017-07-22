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
            <userdetail v-for="user in userListFireBase" :user="user" :key="user.id"></userdetail>
          </tbody>
      </table>
        <editform v-if="flagEditControl"></editform>
      </div>
    </div>
</template>

<script>
import store from '../store/index.js'
import UserDetail from '@/components/UserDetail.vue'
import EditForm from '@/components/EditForm.vue'
import { mapActions,mapMutations,mapState } from 'vuex'

export default {
  name: 'user',
  store,  
  data () {
    return { 
     
    }
  },
  components: {
    'userdetail': UserDetail,
    'editform': EditForm
  },
  computed: {   
     userListFireBase(){
          return this.$store.state.dataFireBase;
      },   
      flagEditControl(){
        return this.$store.state.flagEdit;
      }
  },
  methods: {
    ...mapMutations([
        'getDataFireBase'        
    ])
  },
  created(){
    this.getDataFireBase();
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
