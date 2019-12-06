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
    deleteTask({ commit }, id) {
      axios.delete(BaseUrl + '/tasks/' + id).then(() => {
        commit('deleteTask', id)
        commit('changeLoadingState', false)
      })
    }
  },
  mutations: {
    updateTask(state, task) {
      const itemIndex = state.tasks.findIndex(item => item.id === task.id)
      const newTasks = [
        ...state.tasks,
      ]
      newTasks[itemIndex] = task;
      state.tasks = newTasks;
    },
    deleteTask(state, id) {
      const newTasks = [
        ...state.tasks,
      ]
      state.tasks = _.without(newTasks, { 'id': id })
    },
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  },
  getters: {
    incompleteTasks: state => {
      return _.filter(state.tasks, (task) => {
        return task.complete === false;
      })
    },
    completeTasks: state => {
      return _.filter(state.tasks, (task) => {
        return task.complete === true;
      })
    }
  },
})
