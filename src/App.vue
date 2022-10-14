<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList/index.vue'
export default {
  name: "App",
  components: {
    ToDoList
  }
}
</script>

<style>
  body,
  html {
    background-color: #CDCDCD;
  }
</style>