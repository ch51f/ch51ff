import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import store from './store/index.js';
import router from './routes.js';

Vue.use(Vuex);
Vue.use(VueResource);

new Vue({
	el: '#app',
	components: {
		app: App
	},
	router,
	store: store.store
}).$mount('#app')