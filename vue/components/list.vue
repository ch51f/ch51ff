<template>
	<div class="list-panel">
		<bar></bar>
		<div class="list">
			<item v-for="item in list" v-bind:item="item" :key="item"></item>
		</div>
	</div>
</template>

<script>
import bar from './search_bar';
import item from './list_item';
import store from '../store/index.js';
export default {
	name: 'list',
	data () {
		return {
			list: [1,2,3,4,5],
		}
	},
	created() {
		console.log(store.state.count)
		console.log('created')
		store.commit('increment')
		console.log(store.state.count)
	},
	methods: {

	},
	computed: {

	},
	components: {
		bar,
		item,
	}
}
</script>