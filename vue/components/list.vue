<template>
	<div>
		<div v-bind:title="message">{{msg}}</div>
		<div v-if="seen">Now you see me</div>
		<ol>
			<li v-for="todo in todos">{{todo.text}}</li>
			<todo v-for="item in todos" v-bind:todo="item"></todo>
		</ol>
		<button v-on:click='reverseMessage'>Reverse Message</button>
		<div>{{message}}</div>
		<div v-once>{{message}}</div>
		<div><input type="text" v-model="message"></div>
		<div v-html="html"></div>
		<div>
			<p>Originnal message: "{{msg}}"</p>
			<p>Computed reversed message: "{{reverseMsg}}"</p>
		</div>
		<div>
			<button @click="counter += 1">add counter</button>
			<p>Counter: {{counter}}</p> 
		</div>
		<div>
			<input v-model="txt" placeholder="edit me">
			<p>Message is: {{txt}}</p>
		</div>
		<div>
			<span>Muitiline message is:</span>
			<p style="white-space: pre">{{text}}</p>
			<br>
			<textarea v-model="text" placeholder="add muitiple lines"></textarea>
		</div>
		<div>
			<input type="checkbox" id="checkbox" v-model="checked">
			<label for="checkbox">{{checked}}</label>
		</div>
	</div>
</template>

<script>
import todo from './todo';
export default {
	name: 'demo',
	data () {
		return {
			msg: 'hello word 123',
			message: 'hi, this is title',
			seen: true,
			todos: [
				{text: 'Learn JavaScript'},
				{text: 'Learn Vue'},
				{text: 'Build something awesome'}
			],
			html: '<p>html</p>',
			counter: 0,
			txt: '',
			text: '',
			checked: false,
		}
	},
	methods: {
		reverseMessage() {
			this.msg = this.msg.split(' ').reverse().join(' ')
		}
	},
	computed: {
		reverseMsg() {
			return this.msg.split(' ').reverse().join(' ')
		}
	},
	components: {
		todo,
	}
}
</script>