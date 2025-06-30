import { TOKEN } from '@/constants'
import type { LoginResponse } from '@/types/login'
import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_API_URL

export const http = axios.create({
	baseURL: BASE_URL,
	headers: { Accept: 'application/json' },
})

http.interceptors.request.use(
	config => {
		const token = localStorage.getItem(TOKEN)
		if (token) {
			const parsedToken = JSON.parse(token) as LoginResponse
			const expiresAt = new Date(parsedToken.expires_at).getTime()
			const now = new Date().getTime()

			if (now < expiresAt) {
				config.headers.Authorization = `Bearer ${parsedToken.token}`
			} else {
				localStorage.removeItem(TOKEN)
			}
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
