import React,{Component} from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Slider from '../../components/Slider';
import DropDown from '../../components/DropDown';
import OrderList from '../../components/orders/OrderList';
import OrderAdd from '../../components/orders/OrderAdd';
import OrderUpdate from '../../components/orders/OrderUpdate';
import style from './home.module.less';
import { Layout} from 'antd';
import Goods from '@components/Goods'
import Increased from '@components/Increased'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={ {height:'100vh',width:'100vw'} }>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme='light'>
          <div className="logo" style={ 
            {
              height: '32px',
              background: '#f0f2f5',
              margin: '16px'
            } 
          }/>
          <Slider></Slider>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,background: '#fff',display:'flex',justifyContent:'space-between' }} >
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: style.trigger,
              style:{
                fontSize: '18px',
                lineHeight: '64px',
                padding: '0 24px',
                cursor: 'pointer',
                transition: 'color 0.3s',
              },
              onClick: this.toggle,
            })}
            <DropDown></DropDown>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: '#fff'
            }}
          >
            <HashRouter>
           
              <Route path='/admin/goodslist' render={()=>{
                return(
                  <Goods></Goods>
                )
              }}></Route>
              <Route path='/admin/goodsadd' render={()=>{
                return(
                  <Increased></Increased>
                )
              }}></Route>
              <Route path='/admin/order/list' component={OrderList}></Route>
              <Route path='/admin/order/add' component={OrderAdd}></Route>
              <Route path='/admin/order/update' component={OrderUpdate}></Route>
            </HashRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Home