<template>
    <div>
        <span>완료된 항목 : {{numberOfCompletedTodo}}</span>
     
    </div>
</template>

<script>
export default {
    
    //vuex state를 사용 해야 할 경우에는
    //computed에서 프로세스 구현
    computed : {
        
        numberOfCompletedTodo(){
            //getters 사용 방법 
            return this.$store.getters.numberOfCompletedTodo;
            //모듈 사용 방법 [모듈 명칭/함수명]
            //return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>