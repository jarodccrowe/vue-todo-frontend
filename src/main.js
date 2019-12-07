import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import Moment from 'vue-moment';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faSquare, faCheckSquare, faTrashAlt, faPen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Moment);

new Vue({
  render: h => h(App),
}).$mount('#app')
