<template>
    <div>
        <todo v-for="todo in todos" :key="todo.id" :todo="todo" @click-delete = "deleteTodo" @toggle-checkbox="toggleCheckbox"></todo>
    </div>
</template>

<script>
import todo from '@/components/Todo';

export default {
    components : {
        todo
    },
    computed : {
        //state 사용 방법
        todos(){
            //return this.$store.state.todos;
            //import한 모듈 호출 방법
            return this.$store.state.todo.todos;
        }
    },
    methods: {
        toggleCheckbox(value){
            this.$emit('toggle-checkbox', value);
        },
        deleteTodo(todoId){
            this.$emit('click-delete', todoId);
        }
    },
}
</script>