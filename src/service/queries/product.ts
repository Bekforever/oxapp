import type { DataResponse, ErrorResponse } from '@/types'
import type { Product, ProductParams } from '@/types/product'
import { QUERY_KEYS } from '@/utils/constants/query-keys'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../api/product'

export const useGetAllProductsQuery = (params: ProductParams) => {
	return useQuery<DataResponse<Product>, ErrorResponse>({
		queryKey: [...QUERY_KEYS.PRODUCT.GET_ALL, params],
		queryFn: () => productApi.getAll(params),
	})
}
