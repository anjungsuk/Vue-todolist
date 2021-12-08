<template>
    <div>
        User List
        <table class = "table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">username</th>
                <th scope="col">website</th>
                </tr>
            </thead>
             <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.website}}</td>
                </tr>
                
            </tbody>

                        
        </table>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    created()
    {
        this.getUsers();

    },
    computed:{
        //vuex map 헬퍼 사용 방법
        ...mapState({
            users : state => state.user.users
        })
        //map 헬퍼 미사용
        // users(){
        //     return this.$store.state.users;
            
        // }
    },
    methods: {
        //action map 헬퍼 사용하여 이용
        ...mapActions('user', ['getUsers'])
        // getUsers()
        // {
        //     this.$store.dispatch('getUsers');
        // }
    },
    
}
</script>