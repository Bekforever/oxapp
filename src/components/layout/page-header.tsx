import { ROUTES } from '@/utils/constants/routes'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Layout, theme, Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [
	{
		key: ROUTES.HOME,
		label: 'Главная',
	},
	{
		key: ROUTES.SEARCH,
		label: 'Поиск',
	},
]

export const PageHeader: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout.Header
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				background: colorBgContainer,
				padding: 0,
				marginBottom: 24,
			}}
		>
			{pathname.includes('/product/') && (
				<Button
					type='primary'
					onClick={() => navigate(-1)}
					icon={<ArrowLeftOutlined />}
				>
					Назад
				</Button>
			)}
			<Typography.Title level={3}>
				{items.find(item => item.key === pathname)?.label}
			</Typography.Title>
			<div>{children}</div>
		</Layout.Header>
	)
}
