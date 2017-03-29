import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		author: 'ch51ff',
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	}
})

export default store