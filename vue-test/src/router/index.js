import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/HomePage'
import Second from '@/components/SecondPage'
import Login from '@/components/LoginPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // children:[
      //   {
      //     // path: 'home',
      //     // name: 'Home',
      //     // component: Home,
      //   }
      // ]
    },

    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
