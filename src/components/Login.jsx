import React from 'react';
import { Form, Input, Button, Checkbox, Typography  } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined,GoogleOutlined, InstagramOutlined  } from '@ant-design/icons';
import '../css/Login.css';
import {Link} from "react-router-dom";


const { Title } = Typography;

export const Login = () => {
    return (
        <div className="login__wrapper">
            <Title level={2}>Login</Title>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={0}
                >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button login-form-button-login">
                        Log In
                    </Button>
                    Or <Link to="/signup">register now!</Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button login-form-social login-form-social-1">
                        <FacebookOutlined className="icon-social"/>
                        Login with Facebook
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" danger htmlType="submit" className="login-form-button login-form-social login-form-social-2">
                        <GoogleOutlined className="icon-social"/>
                        Login with Gmail
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form-button login-form-social login-form-social-3">
                        <InstagramOutlined className="icon-social"/>
                        Login with Instagram
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
