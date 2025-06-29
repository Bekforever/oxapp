import { Button, Form, Input, Typography, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './login.module.css'

const { Title } = Typography;

export const LoginPage = () => {
    const onFinish = (values: { email: string; password: string }) => {
        console.log('Login values:', values);
        // TODO: handle login logic
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src="/login-bg.jpg" alt="Login visual" className={styles.image} />
            </div>

            <div className={styles.formSection}>
                <Card className={styles.card}>
                    <Title level={3} className={styles.title}>Вход</Title>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Пожалуйста, введите email' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Введите email" />
                        </Form.Item>

                        <Form.Item
                            label="Пароль"
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Введите пароль" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};
