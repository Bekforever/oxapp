import { PageHeader } from '@/components/layout/page-header'
import { Typography } from 'antd'
import { useLocation, useParams } from 'react-router-dom'

export const ProductDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const { state } = useLocation()
	console.log(state)

	return (
		<>
			<PageHeader />
			<Typography.Title level={4}>ID продукта: {id}</Typography.Title>
		</>
	)
}
