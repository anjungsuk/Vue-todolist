<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input v-model="todoText" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo"/>
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" @click-delete = "deleteTodo" @toggle-checkbox="toggleCheckbox"></todo>
  </div>
</template>

<script>
  import todo from '@/components/Todo';

export default {

  components :{
    todo,
  },
  data(){
    return{
      todoText : '',
      todos : [
        {id : 1, text : 'buy a car', checked : false},
        {id : 2, text : 'play game', checked : false},
      ]
    }
  },
  methods: {
    addTodo(e){
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked : false
      })
      this.todoText = "";
    },
    deleteTodo(id){
      const index = this.todos.findIndex(todo =>{
        return todo.id === id;
      });

      this.todos.splice(index, 1);
    },
    toggleCheckbox({id, checked})
    {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      })

      this.todos[index].checked = checked;
    }
  },
}
</script>

