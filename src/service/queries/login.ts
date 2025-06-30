import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { loginApi } from '../api/login'

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: loginApi.login,
		onSuccess: data => {
			console.log(data)
			notification.success({
				message: 'Добро пожаловать',
			})
		},
		onError: err => {
			console.log(err)
			notification.error(err)
		},
	})
}
