// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//import './instance/instance'
//import './lifecycle/lifecycle'
//import './databiding/databing'

//import './define/define'
//import './define/extend'
//import './define/v-model'
//import './define/slot'
//import './define/render'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render (h) {
    return h(App)
  }
})

