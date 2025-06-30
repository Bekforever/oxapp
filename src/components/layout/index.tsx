import { ROUTES } from '@/utils/constants/routes'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Typography } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Content, Sider } = Layout
const { Title } = Typography

const SIDER_WIDTH = 220

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
		<>
			<Sider
				theme='light'
				width={SIDER_WIDTH}
				style={{
					position: 'fixed',
					height: 'calc(100vh - 50px)',
					left: 24,
					top: 24,
					padding: '30px 0',
					borderRadius: borderRadiusLG,
					background: colorBgContainer,
					zIndex: 10,
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
			<Layout
				style={{
					minHeight: '100vh',
					padding: 24,
					paddingLeft: SIDER_WIDTH + 30,
					background: '#e8eff5',
				}}
			>
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
		</>
	)
}
