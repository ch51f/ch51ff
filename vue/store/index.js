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
	},
	actions: {
		increment(context) {
			context.commit('increment');
		},
		incrementAsync({commit}) {
			setTimeout(() => {
				console.log('async')
				commit('increment')
			}, 5000)
		}
	}
})

export default store