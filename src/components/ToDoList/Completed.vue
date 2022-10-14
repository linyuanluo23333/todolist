<template>
  <div class="todo-underway todolist-container">
    <div class="todo-underway-header">
      <h2>已经完成</h2>
      <span class="todo-count">{{todolists.length}}</span>
    </div>
    <div class="todo-underway-items">
      <transition-group
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <Item
          v-for="(item,index) of todolists"
          :key="item.id"
          :content="item.content"
          :index="index"
          @dele="del"
          :state="true"
          @click="todo"
        />
      </transition-group>
    </div>
  </div>
</template>
  
<script>
import Item from "./Item.vue";
export default {
  props: ["todolists"],
  components: {
    Item
  },
  methods: {
    del(index) {
      this.todolists.splice(index, 1);
    },
    todo(index) {
      let item = this.todolists.splice(index, 1)[0];
      this.$emit("click", item);
    }
  }
};
</script>
  
<style scoped>
.todo-underway-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-count {
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>