// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import './common/stylus/index';

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('./assets/loading.svg'),
  loading: require('./assets/loading.svg'),
  attempt: 1
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
