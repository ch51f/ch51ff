<template>
	<div class="wrap">
		<div>{{msg}}</div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: '这里是header啦'
		}
	}
}
</script>

<style scoped>
	.wrap {
		font-size: 14px;
	}
</style>