import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.config.devtools = true

const BaseUrl = 'https://my-json-server.typicode.com/jarodccrowe/vue-todo';

export const store = new Vuex.Store({
  state: {
    msg: 'Testing2',
    tasks: {
      complete: [],
      incomplete: [],
    },
    loading: true
  },
  actions: {
    loadTasks({
      commit
    }) {
      axios.get(BaseUrl + '/tasks').then((response) => {
        commit('updateTasks', response.data)
        commit('changeLoadingState', false)
      })
    }
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks.incomplete = tasks.filter(task => task.complete === false);
      state.tasks.complete = tasks.filter(task => task.complete === true);
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  }
})