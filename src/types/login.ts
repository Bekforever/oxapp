export interface LoginBody {
	_username: string
	_password: string
}

export interface LoginResponse {
	token: string
	expires_at: string
	lifetime: number
}
