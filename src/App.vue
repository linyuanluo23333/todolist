<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/hello">详情页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 路由对应的组件 如何渲染出来呢 
// 路由组件需要用 vue-router 提供的 router-view 组件来渲染
export default {
  name: "App"
}
</script>