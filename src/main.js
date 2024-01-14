import Vue from 'vue';
import App from './App.vue';
import store from './store';
import BsTable from '@/components/base/BsTable.vue';
import './assets/app.css';

Vue.config.productionTip = false;

Vue.component('BsTable', BsTable);

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
