import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Dropdown} from 'antd';
import { DownOutlined ,UserOutlined,SettingOutlined,LogoutOutlined,GithubFilled} from '@ant-design/icons';

class DropDown extends Component {
 
  click = (payload) => {
    // console.log(this.props)
    this.props.history.push(payload.key)  //点击跳转到指定路由
  };
  renderMenu = () =>{  //渲染下拉菜单
    return (
      <Menu onClick={this.click}>
        <Menu.Item key="/userInfo"><UserOutlined />个人中心</Menu.Item>
        <Menu.Item key="/set"><SettingOutlined />个人设置</Menu.Item>
        <Menu.Item key="/exit"><LogoutOutlined />退出登录</Menu.Item>
     </Menu>
    )
  }
  
  render() {
    return (
      <Dropdown overlay={this.renderMenu()}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}  style={
        {
          marginRight:'50px'
        }
      }>
          <GithubFilled /> <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default withRouter(DropDown);
