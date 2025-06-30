import type { DataResponse } from '@/types'
import type { Product, ProductParams } from '@/types/product'
import { http } from '../http'

export const productApi = {
	getAll: async (params: ProductParams) => {
		const { data } = await http.get<DataResponse<Product>>('variations', {
			params,
		})
		return data
	},
}
