import Vue from 'vue';
import VueRouter from 'vue-router';

import List from './components/list';
import Detail from './components/detail';

Vue.use(VueRouter);

const routes = [
	// {path: '/', component: Demo, name: 'demo'},
	{path: '/', component: List, name: 'list'},
	{path: '/detail', component: Detail, name: 'detail'}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router