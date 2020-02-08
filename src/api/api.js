import axios from 'axios'


// Token
class TokenService {
	constructor() {
		this.token = '';
	}

	get accessToken() {
		return this.token;
	}

	setAccessToken() { }
};
const tokenService = new TokenService();


// Api Client
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://apiProd' : 'https://apiDev';
export const apiClient = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	withCredentials: true,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Origin': BASE_URL
	}
});

apiClient.interceptors.request.use(config => {
	// Set Authorization token
	// config.headers['Authorization'] = `Bearer ${tokenService.accessToken}`;
	return config;
});