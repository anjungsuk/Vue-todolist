import axios from 'axios'
export default{
    namespaced:true,
    state : {
        users : [],
    },

    mutations : {
        set_users(state, users){
            state.users = users;
        }
    },

    actions : {
        getUsers({commit}){
            //axios 요청
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                  commit('set_users', res.data);
            });
          }
    }
}