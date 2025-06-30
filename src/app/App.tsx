import { HomePage, LoginPage } from '@/pages'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	)
}
