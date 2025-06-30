import { queryClient } from '@/service/query-client.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<ConfigProvider
			theme={{
				token: {
					colorBgContainer: '#e6e6e6',
					colorPrimary: '#4e42ef',
					colorInfo: '#4e42ef',
					sizeStep: 4,
					sizeUnit: 4,
					borderRadius: 12,
				},
				components: {
					Layout: {
						siderBg: '#3e3e3e'
					}
				}
			}}
		>
			<App />
		</ConfigProvider>
	</QueryClientProvider>
)
