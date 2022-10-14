<template>
    <div>
        <ToDoHeader @addTodo="addTodo" />
        <UnderWay :todolists="todolists" @click="finish"/>
        <Completed :todolists="finishlists" @click="todo"/>
    </div>
</template>

<script>
import ToDoHeader from './Header';
import UnderWay from './Underway';
import Completed from './Completed';
export default {
    components: {
        ToDoHeader,
        UnderWay,
        Completed
    },
    data() {
        return {
            todolists: [],
            finishlists: []
        }
    },
    methods: {
        addTodo(obj) {
            this.todolists.push(obj);
        },
        finish(item) {
            this.finishlists.push(item);
        },
        todo(item) {
            this.todolists.push(item);
        }
    }
}
</script>

<style>
    .todolist-container {
        width: 1000px;
        margin: 0 auto;
    }
</style>