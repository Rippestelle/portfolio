import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).use(store).use(router).mount('#app')
Vue.use(VueSweetalert2);
