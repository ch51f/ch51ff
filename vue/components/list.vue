<template>
	<div class="list-panel">
		<p>{{count}}{{author}}</p>
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
import {mapState} from 'vuex';
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
		console.log(this.$store)
		console.log(this.$store.state)
		console.log(this.$store.state.count)
	},
	methods: {

	},
	computed: {
		...mapState(['count', 'author'])
	},
	components: {
		bar,
		item,
	}
}
</script>