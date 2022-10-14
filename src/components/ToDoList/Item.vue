<template>
  <div class="todo-item">
    <input type="checkbox" @change="finish(index)" :checked="state">
    <p>{{content}}</p>
    <span class="todo-del" @click="del(index)">-</span>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    index: Number,
    state: {
      default() {
        return false;
      }
    }
  },
  methods: {
    del(index) {
      this.$emit("dele", index);
    },
    finish(index) {
      this.$emit("click", index);
    }
  }
}
</script>

<style>
  .todo-item {
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin-bottom: 10px;
    padding: 0 45px;
    border-radius: 3px;
    border-left: 5px solid #629A9C;
    box-shadow: 0 1px 2px rgb(0 0 0 / 7%);

    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
  }
  .todo-item p {
    margin: 0;
  }
  .todo-del {
    display: inline-block;
    width: 14px;
    height: 12px;
    border-radius: 14px;
    border: 6px double #FFF;
    background: #CCC;
    line-height: 14px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
</style>