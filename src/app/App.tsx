import { AppLayout } from '@/components/layout'
import { ProtectedRoute } from '@/components/protected-route'
import { ROUTES } from '@/constants/routes'
import { HomePage, LoginPage, SearchPage } from '@/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
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
		],
	},
	{
		path: ROUTES.LOGIN,
		element: <LoginPage />,
	},
])

export const App = () => {
	return <RouterProvider router={router} />
}
