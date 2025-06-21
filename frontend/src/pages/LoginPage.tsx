import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Card } from 'antd';
import { setCredentials } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // Simulate auth response
    const token = 'mocked-token';
    const role = 'USER';
    dispatch(setCredentials({ token, role }));
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Login" className="w-full max-w-sm">
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}> <Input.Password /> </Form.Item>
          <Form.Item> <Button type="primary" htmlType="submit" block>Login</Button> </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;