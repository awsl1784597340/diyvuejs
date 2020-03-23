import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'
import search from './components/search.vue'
import post from './components/post.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/search', component: search },
        { path: '/post', component: post },
    ]
})

// 把路由对象暴露出去
export default router