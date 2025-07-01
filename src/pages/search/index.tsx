import { PageHeader } from '@/components/layout/page-header'
import { useGetAllProductsQuery } from '@/service/queries/product'
import type { Product } from '@/types/product'
import { useDebounce } from '@/utils/hooks/useDebounce'
import { EyeFilled } from '@ant-design/icons'
import { Button, Input, Table } from 'antd'
import type { Key } from 'antd/es/table/interface'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchPage = () => {
	const { data, isLoading } = useGetAllProductsQuery({ page: 1, size: 2000 })
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 150)
	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(20)
	const navigate = useNavigate()

	const categoryFilters = useMemo(() => {
		if (!data?.items) return []
		const categories = Array.from(
			new Set(data.items.map(p => p.category).filter(Boolean))
		)
		return categories.map(c => ({ text: String(c), value: c }))
	}, [data])

	const brandFilters = useMemo(() => {
		if (!data?.items) return []
		const brands = Array.from(
			new Set(data.items.map(p => p.brand).filter(Boolean))
		)
		return brands.map(b => ({ text: String(b), value: b }))
	}, [data])

	const columns = [
		{ title: 'ID', dataIndex: 'id', key: 'id' },
		{ title: 'Название', dataIndex: 'name', key: 'name' },
		{
			title: 'Категория',
			dataIndex: 'category',
			key: 'category',
			filters: categoryFilters,
			onFilter: (value: boolean | Key, record: Product) =>
				String(record.category) === String(value),
			sorter: (a: Product, b: Product) =>
				String(a.category || '').localeCompare(String(b.category || '')),
		},
		{
			title: 'Бренд',
			dataIndex: 'brand',
			key: 'brand',
			filters: brandFilters,
			onFilter: (value: boolean | Key, record: Product) =>
				String(record.brand) === String(value),
			sorter: (a: Product, b: Product) =>
				String(a.brand || '').localeCompare(String(b.brand || '')),
		},
		{
			title: 'Цена',
			dataIndex: ['stocks', 0, 'sellPrice', 'UZS'],
			key: 'price',
			render: (_: unknown, record: Product) =>
				record.stocks?.[0]?.sellPrice?.UZS
					? `${record.stocks?.[0]?.sellPrice?.UZS.toLocaleString()} UZS`
					: '-',
			sorter: (a: Product, b: Product) => {
				const priceA = a.stocks?.[0]?.sellPrice?.UZS || 0
				const priceB = b.stocks?.[0]?.sellPrice?.UZS || 0
				return priceA - priceB
			},
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

	const filteredProducts = useMemo(() => {
		if (!data?.items) return []
		if (!debouncedSearch) return data.items

		const lowercasedSearch = debouncedSearch.toLowerCase()
		return data.items
			.map(product => {
				const name = product.name || ''
				const index = name.toLowerCase().indexOf(lowercasedSearch)
				return { ...product, _matchIndex: index }
			})
			.filter(p => p._matchIndex !== -1)
			.sort((a, b) => {
				if (a._matchIndex !== b._matchIndex) {
					return a._matchIndex - b._matchIndex
				}
				return a.name.localeCompare(b.name)
			})
	}, [data, debouncedSearch])

	const paginatedProducts = useMemo(() => {
		const start = (page - 1) * pageSize
		const end = start + pageSize
		return filteredProducts.slice(start, end)
	}, [filteredProducts, page, pageSize])

	return (
		<>
			<PageHeader />
			<Input
				placeholder='Начните вводить'
				value={search}
				size='large'
				onChange={e => {
					if (page !== 1) {
						setPage(1)
					}
					setSearch(e.target.value)
				}}
				style={{ marginBottom: 16, maxWidth: 400 }}
			/>
			<Table<Product>
				rowKey='id'
				loading={isLoading}
				columns={columns}
				dataSource={paginatedProducts}
				pagination={{
					current: page,
					total: filteredProducts.length,
					pageSize,
					showSizeChanger: true,
					onChange: (p, s) => {
						setPage(p)
						setPageSize(s)
					},
				}}
			/>
		</>
	)
}
