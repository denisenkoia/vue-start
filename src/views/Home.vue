<template>
	<div class="page-home">
		<h1 class="asc" id="sdv">Home page</h1>
		<HelloWorld class="HelloWorld" id="dvs" :msg="'Home page message'" />
	</div>
</template>


<script>
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
	name: 'Home',
	components: {
		HelloWorld
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