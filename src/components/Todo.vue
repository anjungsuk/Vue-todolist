<template>
  <div class="mb-2 d-flex">
      <div>
        <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
      </div>
        
        <span 
            class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''"
            :style="todo.checked ? 'text-decoration: line-through': ''"
        >
            {{ todo.text }}
        </span>
        <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete"
        >Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            //mutation 사용 방법
            //this.$store.commit('toggle_todo',{id : this.todo.id, checked : e.target.checked});
            
            //action 사용 방법
            this.$store.dispatch('toggleTodo', {id : this.todo.id, checked : e.target.checked});
            
        },
        clickDelete() {
            //mutation 사용 방법
            //this.$store.commit('delete_todo', this.todo.id);

            //action 사용 방법
            this.$store.dispatch('deleteTodo', this.todo.id);
            
        }
    }
}
</script>

<style>
</style>