<template>
	<div class="detail-panel">
		<dhead></dhead>
		<dcon></dcon>
	</div>
</template>

<script>
import dhead from './detail_head';
import dcon from './detail_content';
export default {
	name: 'detail',
	data () {
		return {
		}
	},
	methods: {

	},
	computed: {

	},
	components: {
		dhead,
		dcon,
	}
}
</script>