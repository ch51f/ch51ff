import Vue from 'vue';
import VueRouter from 'vue-router';

import List from './components/list';
import Detail from './components/detail';
import Todo from './components/todo';

Vue.use(VueRouter);

const routes = [
	// {path: '/', component: Demo, name: 'demo'},
	{path: '/', component: List, name: 'list'},
	{path: '/details', component: Detail, name: 'detail'},
	{path: '/db', component: Todo, name: 'todo'}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router