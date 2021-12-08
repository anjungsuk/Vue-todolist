<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <AddTodo/>
    <hr>
    <TodoList/>
    <CompletedTodo/>
    <VueApexCharts width="700" type="bar" :options="options" :series="series"></VueApexCharts>
    <UserList/>
  </div>
</template>

<script>
  
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';
import VueApexCharts from 'vue-apexcharts' ;
import UserList from '@/components/UserList';

export default {
  
  components :{
    TodoList,
    AddTodo,
    CompletedTodo,
    VueApexCharts,
    UserList
  },
  data(){
    return{
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  
}
</script>

