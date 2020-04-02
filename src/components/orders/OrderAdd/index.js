import React, { Component } from 'react';
import {Card,Button,message,Select,Spin} from 'antd';
import orderApi from '@api/orderApi';
const {Option} = Select
class OrderAdd extends Component {
  state = {
    spinning:false,
    userId:'iiiiiiiiiiii',
    prodId:'dddddddddddd',
    orderStatus:'待发货'
  }
  orderAdd = ()=>{
    this.setState({spinning:true})
    orderApi.orderAdd({...this.state})
      .then((res)=>{
        // console.log(res)
        this.setState({spinning:false})
        message.success(res.data.msg)
        this.props.history.push('/admin/order/list')
      })
      .catch((error)=>{
        console.log(error)
        message.error(error)
      })
  }
  render() {
    let {userId,prodId,orderStatus,spinning} = this.state
    return (
      <Spin spinning={spinning}>
        <Card title='订单添加'>
          用户ID：<input value={userId} onChange={(e)=>{
            this.setState({userId:e.target.value})
          }}/><br/>
          产品ID：<input value={prodId} onChange={(e)=>{
            this.setState({prodId:e.target.value})
          }}/><br/>
          订单状态：
          <Select defaultValue={orderStatus} size='small' 
            style={{marginBottom:10,marginRight:10}} onChange={(e)=>{
              // console.log(e)
              this.setState({orderStatus:e})
            }}>
            <Option value='未付款'>未付款</Option>
            <Option value='待发货'>待发货</Option>
            <Option value='运输中'>运输中</Option>
            <Option value='已收货'>已收货</Option>
            <Option value='已完成'>已完成</Option>
          </Select><br/>
          <Button type='primary' size='middle' onClick={this.orderAdd}>点击添加</Button>
        </Card>
      </Spin>
    );
  }
}

export default OrderAdd;
