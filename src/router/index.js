import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

// 配置路由 第一步 先把组件引入进来
import Home from '@/views/Home';
import HelloWorld from '@/views/HelloWorld';
import Page404 from '@/views/Page404';

import Child from '@/views/Child'
import Child1 from '@/views/Child1'
import Child2 from '@/views/Child2'
// 第二步 进行路由配置
const routes = [
    {
        path: '/',
        component: Home,
        redirect: '/child1',
        children: [
            {
                path: 'child1',
                component: Child
            },
            {
                path: 'child2',
                component: Child1
            },
            {
                path: 'child3',
                component: Child2
            }
        ]
    },
    {
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '*',
        component: Page404
    }
];

// 公共组件 都是一些小组件
// 路由对应的组件 视图组件
// 第三步 生成实例对象
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 第四步 暴露这个实例对象
export default router