import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  CopyOutlined,
  LogoutOutlined,
  UserOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/">
          <div className="logo">
            <h3> {collapsed ? "HB" : "Hello Boss"}</h3>
          </div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/course-management" icon={<CopyOutlined />}>
            <Link to="/dashboard/course-management">Course Management</Link>
          </Menu.Item>
          <Menu.Item
            key="/assignment-management"
            icon={<UnorderedListOutlined />}
          >
            <Link to="/assignment-management">Assignment Management</Link>
          </Menu.Item>
          <Menu.Item key="/employee-management" icon={<UserOutlined />}>
            <Link to="/employee-management">Employee Management</Link>
          </Menu.Item>
          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined />}
            onClick={() => {
              navigate("/login");
            }}
          >
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
