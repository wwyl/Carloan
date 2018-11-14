import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    { path: '/HelloWorld', component: HelloWorld },
    { path: '/Home', component: Home },
    { path: '*', redirect: '/Home' }   /*默认跳转路由*/
];
import HelloWorld from '../components/HelloWorld'
import Home from '../pages/home/Home'

const router = new Router({
    routes // （缩写）相当于 routes: routes
});

export default router;
