// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import './assets/css/bootstrap.min.css'
//import './assets/js/bootstrap.min'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (!window.localStorage.user) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
