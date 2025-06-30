import type { LoginResponse } from '@/types/login'
import { TOKEN } from '@/utils/constants'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
	children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const token = localStorage.getItem(TOKEN)

	if (!token) {
		return <Navigate to='/login' replace />
	}

	const parsedToken = JSON.parse(token) as LoginResponse
	const expiresAt = new Date(parsedToken.expires_at).getTime()
	const now = new Date().getTime()

	if (now >= expiresAt) {
		localStorage.removeItem(TOKEN)
		return <Navigate to='/login' replace />
	}

	return <>{children}</>
}
