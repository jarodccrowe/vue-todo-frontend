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
    addTask({ commit }, payload) {
      axios.post(BaseUrl + '/tasks', {
        ...payload,
        complete: false,
      }).then((response) => {
        commit('addTask', response.data)
      })
    },
    deleteTask({ commit }, id) {
      axios.delete(BaseUrl + '/tasks/' + id).then(() => {
        commit('deleteTask', id)
      })
    },
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
      })
    },
  },
  mutations: {
    addTask(state, task) {
      const newTasks = [
        ...state.tasks,
        task
      ]
      state.tasks = newTasks
    },
    deleteTask(state, id) {
      const newTasks = [
        ...state.tasks,
      ]
      state.tasks = _.reject(newTasks, { 'id': id })
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    },
    updateTask(state, task) {
      const itemIndex = state.tasks.findIndex(item => item.id === task.id)
      const newTasks = [
        ...state.tasks,
      ]
      newTasks[itemIndex] = task;
      state.tasks = newTasks;
    },
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  getters: {
    completeTasks: state => {
      return _.filter(state.tasks, (task) => {
        return task.complete === true;
      })
    },
    incompleteTasks: state => {
      return _.filter(state.tasks, (task) => {
        return task.complete === false;
      })
    },
  },
})
