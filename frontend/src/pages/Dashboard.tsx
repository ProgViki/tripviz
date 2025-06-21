import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => navigate('/dashboard')}>Dashboard</Menu.Item>
          <Menu.Item key="2" onClick={() => navigate('/book-trip')}>Book Trip</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white text-right px-4">
          <Button onClick={() => navigate('/login')}>Logout</Button>
        </Header>
        <Content className="p-6">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
