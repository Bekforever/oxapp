import type { LoginBody } from '@/types/login'
import { http } from '../http'

export const loginApi = {
	login: async (body: LoginBody) => {
		const { data } = await http.post('security/auth_check', {
			...body,
			_subdomain: 'toko',
		})
		return data
	},
}
