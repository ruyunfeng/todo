import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

 

import './assets/less/global.less'
import createRouter from './config/router'
import createStore from './store/store'

// import './index.html';
// import './css/index.less';
// import './style.css';

Vue.use(VueRouter)
Vue.use(Vuex)


const router = createRouter()
const store = createStore()


router.beforeEach((to,from,next) => {
  console.log('before each invoked')
  if(to.fullPath === '/app'){
    // next('/login')
    next()
  }else{
    next()
  }
 
})
router.beforeResolve((to,from,next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to,from) => {
  console.log('before after each')
   
})
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
console.log('hollo world!')
