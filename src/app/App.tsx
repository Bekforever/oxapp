import { router } from '@/utils/router'
import { RouterProvider } from 'react-router-dom'
import { Providers } from './providers'

export const App = () => {
	return (
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	)
}
