import Vue from 'vue'
import Vuex from 'vuex'
// vuex module 사용
import user from './modules/user'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  //import한 모듈 사용 방법
  modules : {
    user,
    todo
  }
  
  
})
