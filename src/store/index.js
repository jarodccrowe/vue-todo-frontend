import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash';

Vue.use(Vuex)
Vue.config.devtools = true

const BaseUrl = 'https://my-json-server.typicode.com/jarodccrowe/vue-todo';

export const store = new Vuex.Store({
  state: {
    msg: 'Testing2',
    tasks: [],
    loading: true
  },
  actions: {
    loadTasks({ commit }) {
      axios.get(BaseUrl + '/tasks').then((response) => {
        commit('updateTasks', response.data)
        commit('changeLoadingState', false)
      })
    },
    updateTask({ commit }, payload) {
      axios.patch(BaseUrl + '/tasks/' + payload.id, {
        ...payload,
      }).then((response) => {
        commit('updateTask', response.data)
        commit('changeLoadingState', false)
      })
    },
  },
  mutations: {
    updateTask(state, task) {
      state.tasks[task.id] = task;
    },
    updateTasks(state, tasks) {
      state.tasks = _.keyBy(tasks, 'id');
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  },
  getters: {
    incompleteTasks: state => {
      return _.pickBy(state.tasks, (task) => {
        return task.complete === false;
      })
    },
    completeTasks: state => {
      return _.pickBy(state.tasks, (task) => {
        return task.complete === true;
      })
    }
  },
})
