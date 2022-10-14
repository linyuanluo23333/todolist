<template>
  <div id="app">
    <button @click="to('/')">首页</button>
    <button @click="to('/hello')">详情页</button>
    <router-view></router-view>
  </div>
</template>

<script>
// 路由对应的组件 如何渲染出来呢 
// 路由组件需要用 vue-router 提供的 router-view 组件来渲染
// 动态路由 渲染不同人的信息 可以利用动态路由获取参数发送请求来读取对应的数据
export default {
  name: "App",
  methods: {
    to(path) {
      this.$router.push({ path: path }).catch(() => {})
    }
  }
}
</script>