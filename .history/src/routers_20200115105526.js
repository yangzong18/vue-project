import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import List from '../views/list'
// import List from '../views/list.vue'
import Home from './views/index.vue'
import Login from './views/login.vue'
import User from './views/user.vue'
import About from '../views/about.vue'
import NotFound from './components/404.vue'
import Message from './views/message.vue'

const routers = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/cnodevue',
    name: 'cnodevue',
    component: Home
}, {
    path: '/list',
    name: 'list',
    component: List
}, {
    path: '/topic/:id',
    name: 'topic',
    component(resolve) {
        require.ensure(['./views/topic.vue'], () => {
            resolve(require('./views/topic.vue'));
        });
    }
}, {
    path: '/add',
    name: 'add',
    component(resolve) {
        require.ensure(['./views/new.vue'], () => {
            resolve(require('./views/new.vue'));
        });
    },
    meta: { requiresAuth: true }
}, {
    path: '/message',
    name: 'message',
    component(resolve) {
        require.ensure(['./views/message.vue'], () => {
            resolve(require('./views/message.vue'));
        });
    },
    meta: { requiresAuth: true }
}, {
    path: '/user/:loginname',
    name: 'user',
    component(resolve) {
        require.ensure(['./views/user.vue'], () => {
            resolve(require('./views/user.vue'));
        });
    }
}, {
    path: '/about',
    name: 'about',
    component(resolve) {
        require.ensure(['./views/about.vue'], () => {
            resolve(require('./views/about.vue'));
        });
    }
}, {
    path: '/login',
    name: 'login',
    component(resolve) {
        require.ensure(['./views/login.vue'], () => {
            resolve(require('./views/login.vue'));
        });
    }
}, {
    path: '*',
    component: Home
}];

export default routers;