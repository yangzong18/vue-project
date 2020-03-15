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
  // Mock.start();
}
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
————————————————
版权声明：本文为CSDN博主「阿庭」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43606809/article/details/103040805

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