<template>
	<div class="todo-list">
		<h4>待办列表</h4>
		<div class="list">
			<div v-for="todo in todos" :key="todo.id">
				<p class="item" v-bind:class="{done: todo.status}">>todo: {{todo.todo}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: 'todo',
	created() {
		this.$store.dispatch({
			type: 'getTodos',
		})
	},
	computed: {
		...mapState(['todos'])
	},
}
</script>