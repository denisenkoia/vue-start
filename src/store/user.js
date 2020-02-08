import { apiUser } from '@/api/apiUser'

export default {
	namespaced: true,
	state() {
		return {
			user: undefined
		}
	},
	getters: {
		getUserId: state => {
			return state.user ? state.user.id : null;
		}
	},
	mutations: {
		seUser(state, data) {
			state.user = data;
		}
	},
	actions: {
		fetchUser({ commit }) {
			// return apiUser.fetchUser()
			// 	.then(response => {

			// 	})
			// 	.catch(error => {
			// 		commit('seUser', {});
			// 	})
		}
	}
}