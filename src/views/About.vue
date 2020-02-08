<template>
	<div class="page-about">
		<h1>About page</h1>
		<HelloWorld :msg="'About page msg'" />
	</div>
</template>


<script>
import Vue from 'vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
	name: 'About',
	components: {
		HelloWorld
	},
	data() {
		return {}
	},
	computed: {
		...mapState('user', [
			'user'
		]),
		...mapGetters('user', {
			userId: 'getUserId'
		})
	},
	methods: {
		...mapMutations('user', [
			'seUser',
		]),
		...mapActions('user', [
			'fetchUser'
		])
	},
	mounted() {
		this.fetchUser();
	}
})
</script>


<style lang="scss" scoped>
</style>