import type { ErrorResponse } from '@/types'
import type { LoginBody, LoginResponse } from '@/types/login'
import { TOKEN } from '@/utils/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../api/login'

export const useLoginMutation = () => {
	const navigate = useNavigate()

	return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginBody>({
		mutationFn: loginApi.login,
		onSuccess: data => {
			localStorage.setItem(TOKEN, JSON.stringify(data))
			navigate('/')
			notification.success({
				message: 'Добро пожаловать',
			})
		},
		onError: err => {
			console.log(err)
		},
	})
}
