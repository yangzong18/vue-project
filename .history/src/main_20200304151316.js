// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import * as filter from '@/utils/filter.js'
import filters from './filters'
Object.keys(filters).forEach(k => {
　　Vue.filter(k, filters[k])
})
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
Vue.use(VueLazyload, {
    error: require('./assets/loading.svg'),
    loading: require('./assets/loading.svg'),
    attempt: 1
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})
