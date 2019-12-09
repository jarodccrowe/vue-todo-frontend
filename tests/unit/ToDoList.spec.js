import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import Moment from 'vue-moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import {
  faSquare,
  faCheckSquare,
  faTrashAlt,
  faPlusSquare,
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(
  faSquare,
  faCheckSquare,
  faTrashAlt,
  faPen,
  faPlusSquare,
  faTimesCircle,
  faCheckCircle,
)

import ToDoBase from '@/components/ToDoBase.vue'
import AddTaskBase from '@/components/AddTaskBase.vue'
import EditTaskBase from '@/components/EditTaskBase.vue'
import TaskBase from '@/components/TaskBase.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Moment);
localVue.use(BootstrapVue);

localVue.component('font-awesome-icon', FontAwesomeIcon)

localVue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

let store

store = new Vuex.Store({
  state: {
    tasks: [],
    openEditTaskForms: [],
    loading: false,
    formOpen: true,
  },
  getters: {
    completeTasks: () => {
      return [
        {
          "id": 1,
          "name": "Walk the dog",
          "complete": true,
          "type": "task"
        },
      ]
    },
    incompleteTasks: () => {
      return [
        {
          "id": 2,
          "name": "Walk the dog again",
          "complete": false,
          "type": "task"
        },
      ]
    }
  }
})

describe('AddTaskBase.vue', () => {
  const wrapper = mount(AddTaskBase, {
    localVue,
    store,
  })
  it('Matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('EditTaskBase.vue', () => {
  const wrapper = mount(EditTaskBase, {
    localVue,
    store,
  })
  it('Matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('TaskBase.vue', () => {
  const wrapper = mount(TaskBase, {
    localVue,
    store,
  })
  it('Matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ToDoBase.vue', () => {
  const wrapper = mount(ToDoBase, {
    localVue,
    store,
  })
  it('Matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  })
  it('Loads a task', () => {
    expect(wrapper.html()).toContain('Walk the dog again')
  })
})
