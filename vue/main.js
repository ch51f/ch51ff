import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import 'common/utils/highView';
import './less/main.less';

import store from './store/index.js';
import router from './routes.js';

Vue.use(VueResource);

new Vue({
	el: '#app',
	components: {
		app: App
	},
	router,
	store: store,
}).$mount('#app');