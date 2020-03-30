import React, { Component } from 'react';
import menulist from './menulist';
import {withRouter} from 'react-router-dom';
import {Menu} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
class Slider extends Component {

  renderMenu = (list) =>{  //渲染 侧边栏列表
    return list.map((item)=>{
      if(item.children){
        return (
            <SubMenu key={item.key} title={item.title}>
              {this.renderMenu(item.children)}
            </SubMenu>
        )
      }else{
        return (
            <Menu.Item key={item.key} path={item.path}>{item.title}</Menu.Item>
        )
      }
    })
  }
  handleJump = (e) =>{  //点击跳转
    // console.log(e)
    let {path} = e.item.props
    this.props.history.push(path)
  }
  render() { 
    return (
      <div>
        <Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          theme='light'
          onClick={this.handleJump}
        >
          {this.renderMenu(menulist)}

        </Menu>
      </div>
    );
  }
}

export default withRouter(Slider);
