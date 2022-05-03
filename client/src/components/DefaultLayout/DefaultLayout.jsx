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
} from "@ant-design/icons";
const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
        <Link to="/">
          <div className="logo">
            <h3> {collapsed ? "HB" : "Hello Boss"}</h3>
          </div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <SubMenu title="Course Management" icon={<CopyOutlined />}>
            <Menu.Item key="/dashboard/create-course">
              <Link className="ml-2" to="/dashboard/create-course">
                Create Course
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/course-list">
              <Link className="ml-2" to="/dashboard/course-list">
                Course List
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            title="Assignment Management"
            icon={<UnorderedListOutlined />}
          >
            <Menu.Item key="/dashboard/create-assignment">
              <Link className="ml-2" to="/dashboard/create-assignment">
                Create Assignment
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/assignment-list">
              <Link className="ml-2" to="/dashboard/assignment-list">
                Assignment List
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title="Employee Management" icon={<UserOutlined />}>
            <Menu.Item key="/dashboard/create-employee">
              <Link className="ml-2" to="/dashboard/create-employee">
                Create Employee
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/employee-list">
              <Link className="ml-2" to="/dashboard/employee-list">
                Employee List
              </Link>
            </Menu.Item>
          </SubMenu>

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
