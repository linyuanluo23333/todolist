import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

// 配置路由 第一步 先把组件引入进来
import Home from '@/views/Home';
import HelloWorld from '@/views/HelloWorld';
// 第二步 进行路由配置
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/hello',
        component: HelloWorld
    }
];

// 公共组件 都是一些小组件
// 路由对应的组件 视图组件
// 第三步 生成实例对象
const router = new VueRouter({
    routes,
    mode: 'hash'
})

// 第四步 暴露这个实例对象
export default router