export default{

    //데이터가 들어가는곳 data
    state: {
        todos : [
          {id : 1, text : 'buy a car', checked : false},
          {id : 2, text : 'play game', checked : false},
        ],
        
      },
      //데이터를 바꾸는곳
      mutations: {
        add_todo(state, value){
          state.todos.push({
            id : Math.random(),
            text : value,
            checked : false
          })
        },
        toggle_todo(state, {id, checked}){
          const index = state.todos.findIndex(todo => {
            return todo.id === id;
          })
          console.log(checked);
          state.todos[index].checked = checked;
        },
        delete_todo(state, id){
          const index = state.todos.findIndex(todo =>{
            return todo.id === id;
          });
    
          state.todos.splice(index, 1);
        },
        
      },
      //함수(methods) 들어가는곳 method
      actions: {
        //요청 예시
        addTodo({commit}, value){
          console.log(value);
          setTimeout(function(){
            commit('add_todo', value);
          }, 500);
        },
        toggleTodo({commit}, value){
          setTimeout(function(){
            commit('toggle_todo', value);
          }, 500);
        },
        deleteTodo({commit}, value){
          console.log(value);
          setTimeout(function(){
            commit('delete_todo', value);
          }, 500);
        },
        
      },
      modules: {
      },
      //Vue 컴포넌트에 computed와 동일
      getters: {
        numberOfCompletedTodo : state => {
          //state todos 접근
          return state.todos.filter(todo => todo.checked).length;
        }
      }

}