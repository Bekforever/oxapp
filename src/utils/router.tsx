import { AppLayout } from '@/components/layout'
import { ProtectedRoute } from '@/components/protected-route'
import { HomePage, LoginPage, SearchPage } from '@/pages'
import { ProductDetailPage } from '@/pages/product-details'
import { ROUTES } from '@/utils/constants/routes'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: (
			<ProtectedRoute>
				<AppLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: ROUTES.HOME,
				element: <HomePage />,
			},
			{
				path: ROUTES.SEARCH,
				element: <SearchPage />,
			},
			{
				path: '/product/:id',
				element: <ProductDetailPage />,
			},
		],
	},
	{
		path: ROUTES.LOGIN,
		element: <LoginPage />,
	},
])
