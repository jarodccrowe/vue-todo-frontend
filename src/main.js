import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
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
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Moment);

new Vue({
  render: h => h(App),
}).$mount('#app')
