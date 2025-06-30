export interface ErrorResponse {
	code: number
	message: string
}

export interface DataResponse<T> {
	items: T[]
	total_count: number
	page: number
}
