// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import '../static/font-icon/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Msg from 'vue-message'
import Mock from './mock'
if (process.env.NODE_ENV === 'development') {
  Mock.start();
}
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.use(Msg, {text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'})
Vue.use(ElementUI)
/* eslint-disable no-new */
const vueExp = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})

export default vueExp