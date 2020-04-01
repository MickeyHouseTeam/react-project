import React, { Component } from 'react';
import {Card,Button,message,Spin,Select} from 'antd';
import orderApi from '@api/orderApi';
const {Option} = Select

class OrderUpdate extends Component {
  state = {
    spinning:false,
    userId:'123',
    prodId:'321',
    orderStatus:'已发货',
    _id:''
  }
  getOneById = (id) =>{  //根据传递的id查找数据
    this.setState({spinning:true})
    console.log(id)
    orderApi.getOrderList(id)
      .then((res)=>{
        this.setState({spinning:false})
        console.log(res)
        this.setState({...res.data.list})
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  orderUpdateById = ()=>{  //修改
    // let {_id=null} = this.props.location.state
    // let {_id} = this.state
    this.setState({spinning:true})
    orderApi.orderUpdateById({...this.state})
      .then((res)=>{
        this.setState({spinning:false})
        console.log(res)
        message.success(res.data.msg)
        // this.props.history.push('/admin/order/list')
        this.props.history.goBack()
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  componentDidMount(){
    // console.log(this.props.location.state) //{_id}
    // id解构要 初始化  !!! 否则会报错 原因也许是因为异步
    let {_id=null} = this.props.location.state
    console.log(_id)
    this.getOneById(_id)
    this.setState({_id})
    console.log(this.state._id)
  }
  render() {
    let {userId,prodId,orderStatus,spinning} = this.state
    return (
      <Spin spinning={spinning} >
        <Card title='订单修改'>
          用户ID：<input value={userId} onChange={(e)=>{
            this.setState({userId:e.target.value})
          }}/><br/>
          产品ID：<input value={prodId} onChange={(e)=>{
            this.setState({prodId:e.target.value})
          }}/><br/>
          订单状态：
            <Select defaultValue={orderStatus} size='small' 
              style={{marginBottom:10,marginRight:10}} onChange={(e)=>{
                console.log(e)
                this.setState({orderStatus:e})
              }}>
              <Option value='未付款'>未付款</Option>
              <Option value='待发货'>待发货</Option>
              <Option value='运输中'>运输中</Option>
              <Option value='已收货'>已收货</Option>
              <Option value='已完成'>已完成</Option>
            </Select><br/>
          <Button onClick={this.orderUpdateById}>点击修改</Button>
        </Card>
      </Spin>
   );
  }
}

export default OrderUpdate;
