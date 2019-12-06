import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import Moment from 'vue-moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Moment);

new Vue({
  render: h => h(App),
}).$mount('#app')
