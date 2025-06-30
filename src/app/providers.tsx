import { queryClient } from '@/service/query-client.ts'
import { AppTheme } from '@/utils/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import type { ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ConfigProvider theme={AppTheme}>{children}</ConfigProvider>
		</QueryClientProvider>
	)
}
