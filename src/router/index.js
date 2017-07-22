import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
