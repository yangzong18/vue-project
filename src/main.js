// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/scss/CV.scss';
import $ from 'webpack-zepto';
import App from './views/list'
import router from './router'
import axios from 'axios'
import Mock from './mock'
import store from './vuex/user'
import Alert from './libs/alert';
import filters from './filters';
console.log(filters)
Vue.use(Alert);
Vue.prototype.$http = axios;
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
    Mock.start();
}
// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
    store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}
// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app');