// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'webpack-zepto';
import App from './App'
import store from '@/store'
import store from '@/store'；
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  render: h => h(App)
})