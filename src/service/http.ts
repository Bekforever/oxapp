import { TOKEN } from '@/constants'
import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_API_URL

export const http = axios.create({
	baseURL: BASE_URL,
	headers: { Accept: 'application/json' },
})

http.interceptors.request.use(
	config => {
		const token = localStorage.getItem(TOKEN)
		config.headers.Authorization = `Bearer ${token}`
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
