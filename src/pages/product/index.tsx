import { PageHeader } from '@/components/layout/page-header'
import { useGetAllProductsQuery } from '@/service/queries/product'
import type { Product } from '@/types/product'
import { EyeFilled } from '@ant-design/icons'
import { Button, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()

	const pageParam = Number(searchParams.get('page')) || 1
	const sizeParam = Number(searchParams.get('size')) || 10

	const [page, setPage] = useState(pageParam)
	const [size, setSize] = useState(sizeParam)
	const { data, isLoading } = useGetAllProductsQuery({ page, size })

	const updateParams = (p: number, s: number) => {
		setSearchParams({ page: String(p), size: String(s) })
	}

	const columns = [
		{ title: 'ID', dataIndex: 'id', key: 'id' },
		{ title: 'Название', dataIndex: 'name', key: 'name' },
		{ title: 'Категория', dataIndex: 'category', key: 'category' },
		{ title: 'Бренд', dataIndex: 'brand', key: 'brand' },
		{
			title: 'Цена',
			dataIndex: ['stocks', 0, 'sellPrice', 'UZS'],
			key: 'price',
			render: (_: unknown, record: Product) =>
				record.stocks?.[0]?.sellPrice?.UZS
					? `${record.stocks?.[0]?.sellPrice?.UZS.toLocaleString()} UZS`
					: '-',
		},
		{
			title: 'Действия',
			key: 'actions',
			render: (_: unknown, record: Product) => (
				<Button
					icon={<EyeFilled />}
					type='primary'
					onClick={() => navigate(`/product/${record.id}`, { state: record })}
				>
					Посмотреть
				</Button>
			),
		},
	]

	useEffect(() => {
		const newPage = Number(searchParams.get('page')) || 1
		const newSize = Number(searchParams.get('size')) || 10
		if (newPage !== page) setPage(newPage)
		if (newSize !== size) setSize(newSize)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams])

	return (
		<>
			<PageHeader />
			<Table<Product>
				rowKey='id'
				loading={isLoading}
				columns={columns}
				dataSource={data?.items || []}
				pagination={{
					current: page,
					total: data?.total_count,
					pageSize: size,
					showSizeChanger: true,
					onChange: (p, s) => {
						updateParams(p, s)
					},
				}}
			/>
		</>
	)
}
