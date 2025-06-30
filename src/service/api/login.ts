import type { LoginBody, LoginResponse } from '@/types/login'
import qs from 'qs'
import { http } from '../http'

export const loginApi = {
	login: async (body: LoginBody) => {
		const formData = qs.stringify({
			...body,
			_subdomain: 'toko',
		})
		const { data } = await http.post<LoginResponse>(
			'security/auth_check',
			formData
		)
		return data
	},
}
