import { ROUTES } from '@/utils/constants/routes'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Typography } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Content, Sider } = Layout
const { Title } = Typography

const items = [
	{
		key: ROUTES.HOME,
		icon: <HomeOutlined />,
		label: 'Главная',
	},
	{
		key: ROUTES.SEARCH,
		icon: <SearchOutlined />,
		label: 'Поиск',
	},
]

export const AppLayout = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Layout style={{ minHeight: '100vh', padding: 24 }}>
			<Sider
				theme='light'
				style={{
					padding: '30px 0',
					height: 'calc(100vh - 50px)',
					borderRadius: borderRadiusLG,
				}}
			>
				<Title
					level={2}
					style={{
						color: '#4e42ef',
						fontWeight: 700,
						padding: '0 24px',
						marginBottom: 30,
					}}
				>
					OX SYSTEM
				</Title>
				<Menu
					mode='inline'
					selectedKeys={[location.pathname]}
					items={items}
					onClick={({ key }) => navigate(key)}
				/>
			</Sider>
			<Layout>
				<Content style={{ margin: '0 16px' }}>
					<div
						style={{
							padding: 24,
							minHeight: 'calc(100vh - 50px)',
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}
