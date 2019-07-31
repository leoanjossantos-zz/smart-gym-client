import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider, Content, Header, Footer } = Layout;

class LateralMenu extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
          <Menu.Item key="1">
            <Icon type="user-add" />
            <span>Novo Aluno</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="solution" />
            <span>Novo Instrutor</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file-done" />
            <span>Gerenciar aulas em grupo</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default LateralMenu;
