<template>
	<div class="wrap">
		<div>
			<ul v-for="item in datas">
				<li>
					<div>
						<h4>{{item.title}}<small>{{item.date}}</small><small>{{author}}</small></h4>
						<p>{{item.content}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {datas: []}
	},
	created() {

	},
	methods: {},
	computed: {}
}
</script>

<style scoped>
	.wrap {
		font-size: 16px;
		word-break: break-all;
	}
	small {
		padding-left: 20px;
	}
</style>