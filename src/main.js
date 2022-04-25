import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import scroll from 'vue-seamless-scroll'



Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(ElementUI);
Vue.use(scroll)

// Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
