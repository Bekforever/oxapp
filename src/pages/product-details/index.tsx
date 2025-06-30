import { PageHeader } from '@/components/layout/page-header'
import type { Product } from '@/types/product'
import { Alert, Card, Descriptions, Divider, Image, Typography } from 'antd'
import { useLocation, useParams } from 'react-router-dom'

export const ProductDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const { state } = useLocation()

	const product = state as Product | undefined

	if (!product) {
		return (
			<>
				<PageHeader />
				<Alert
					banner
					message='Ошибка'
					description='Нет данных о продукте. Попробуйте позже'
					type='error'
					style={{ width: 500 }}
				/>
			</>
		)
	}

	return (
		<>
			<PageHeader />
			<Card
				title={
					<Typography.Title level={4} style={{ margin: 0 }}>
						Продукт №{id}
					</Typography.Title>
				}
			>
				<Descriptions column={2} bordered size='middle'>
					<Descriptions.Item label='Название'>{product.name}</Descriptions.Item>
					<Descriptions.Item label='Бренд'>{product.brand}</Descriptions.Item>
					<Descriptions.Item label='Категория'>
						{product.category}
					</Descriptions.Item>
					<Descriptions.Item label='Артикул (SKU)'>
						{product.sku}
					</Descriptions.Item>
					<Descriptions.Item label='Поставщик'>
						{product.supplier}
					</Descriptions.Item>
					<Descriptions.Item label='Ед. изм.'>{product.unit}</Descriptions.Item>
					<Descriptions.Item label='Описание' span={2}>
						{product.description}
					</Descriptions.Item>
					<Descriptions.Item label='Штрихкод'>
						{product.barcode}
					</Descriptions.Item>
					<Descriptions.Item label='Продаваемый'>
						{product.sellable ? 'Да' : 'Нет'}
					</Descriptions.Item>
					<Descriptions.Item label='Отслеживаемый'>
						{product.tracking ? 'Да' : 'Нет'}
					</Descriptions.Item>
					<Descriptions.Item label='Цена (UZS)'>
						{product.stocks?.[0]?.sellPrice?.UZS?.toLocaleString() || '-'}
					</Descriptions.Item>
				</Descriptions>

				{product.images && product.images.length > 0 && (
					<>
						<Divider orientation='left'>Изображения</Divider>
						<div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
							{product.images.map(img => (
								<Image
									key={img.id}
									width={120}
									src={img.urls?.original || ''}
									alt={img.originalName}
									placeholder
								/>
							))}
						</div>
					</>
				)}
			</Card>
		</>
	)
}
