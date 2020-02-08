<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link>
			<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
			<router-link to="/about">About</router-link>
		</nav>

		<router-view />
	</div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'App'
})
</script>


<style lang="scss" scoped>
</style>