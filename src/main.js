import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:3000'

Vue.use(VueRouter)
import router from './router.js'

import app from './App.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui'

import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'



Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)



var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})