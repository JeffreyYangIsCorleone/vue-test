import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/HomePage'
import Second from '@/components/SecondPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
