import { useLoginMutation } from '@/service/queries/login'
import type { LoginBody } from '@/types/login'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Card, Form, Input, Typography } from 'antd'
import styles from './login.module.css'

const { Title } = Typography

export const LoginPage = () => {
	const { mutate: login, isError, error, isPending } = useLoginMutation()
	const onFinish = (values: LoginBody) => {
		login(values)
	}
	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				<img
					src='/assets/images/auth-wallpaper.jpg'
					alt='Login visual'
					className={styles.image}
				/>
			</div>

			<div className={styles.formSection}>
				<Card className={styles.card}>
					<Title level={3} className={styles.title}>
						Вход
					</Title>
					{isError && (
						<Alert
							style={{ margin: '20px 0' }}
							message={error?.response?.data?.message}
							type='error'
						/>
					)}
					<Form layout='vertical' onFinish={onFinish}>
						<Form.Item<LoginBody>
							label='Никнейм'
							name='_username'
							rules={[
								{ required: true, message: 'Пожалуйста, введите никнейм' },
							]}
						>
							<Input prefix={<UserOutlined />} placeholder='Введите никнейм' />
						</Form.Item>

						<Form.Item<LoginBody>
							label='Пароль'
							name='_password'
							rules={[
								{ required: true, message: 'Пожалуйста, введите пароль' },
							]}
						>
							<Input.Password
								prefix={<LockOutlined />}
								placeholder='Введите пароль'
							/>
						</Form.Item>

						<Form.Item>
							<Button
								loading={isPending}
								type='primary'
								htmlType='submit'
								block
							>
								Войти
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</div>
	)
}
