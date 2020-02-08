import { apiClient } from './api'


class ApiUser {
	// User
	fetchUser() {
		return apiClient.get('getUser');
	}
};
export const apiUser = new ApiUser();