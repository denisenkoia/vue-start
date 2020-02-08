<template>
	<div class="hello-world">
		<h2>HelloWorld</h2>
		<h3>Props message {{ msg }}</h3>
	</div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: ''
		}
	},
	data() {
		return {}
	},
	computed: {},
	methods: {},
	mounted() {}
})
</script>


<style lang="scss" scoped>
</style>