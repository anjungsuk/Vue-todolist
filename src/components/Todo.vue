<template>
    <div class="mb-2 d-flex">
        <div>
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox"/>
        </div>
        <span class="ml-3 flex-grow-1" :class="todo.checked ? 'text-muted' : ''" :style="todo.checked ? 'text-decoration: line-through' : ''">
          {{todo.text}}
        </span>

        <button class="btn btn-danger btn-sm" @click="deleteTodo">삭제</button>
    </div>
</template>

<script>
export default {
    props :{
        todo:{
            type:Object,
            required : true
        }
    },
    methods: {
        toggleCheckBox(e){
            console.log('test');
            this.$emit('toggle-checkBox',{
                id : this.todo.id,
                checked : e.target.checked
            })

            console.log(e.target.checked);
            
        },
        deleteTodo(){
            this.$emit('click-delete',
                this.todo.id,
            );
        }
    },  
}
</script>

<style>
    
</style>