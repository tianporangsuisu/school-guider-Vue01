import Vue from 'vue'
import App from './App.vue'
import router from "./Router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
import VueAxios from "vue-axios";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
//修改baseURL
axios.defaults.baseURL="http://localhost:8081/"

new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
}).$mount('#app')
