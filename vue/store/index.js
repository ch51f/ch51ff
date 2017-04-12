import Vue from 'vue';
import Vuex from 'vuex';
import ajax from 'common/utils/ajax';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		author: 'ch51ff',
		count: 0,
		todos: [],
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		todos(state, todos) {
			state.todos = todos;
		},
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
		},
		getTodos({commit}) {
			// debugger;
			Vue.http.jsonp('http://fch.net.fangstar.net:3000/todo').then(response => {
				let todos = response.data;
				commit('todos', todos.data);
			}, response => {
				alert('系统错误')
				// console.log(2)
				// console.log(response)
			})
		}
	}
})

export default store