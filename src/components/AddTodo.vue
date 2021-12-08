<template>
    <div>
        <input v-model="todoText" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todoText : '',
        }
    },
    methods: {
        addTodo(e){
            //mutation 사용 방법
            //this.$store.commit('add_todo', e.target.value);
            //action 사용방법
            this.$store.dispatch('addTodo', e.target.value);
            //this.$emit('add-todo', e.target.value);
            this.todoText = "";
        }
    },  
}
</script>