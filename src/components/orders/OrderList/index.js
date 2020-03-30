import React, { Component, Fragment } from 'react';
import {Card,Table, Button} from 'antd';
import orderApi from '@api/orderApi';
// const dataSource = [
//   {
//     num: '1',
//     key:'1',
//     _id: '231548746534',
//     orderTime: '2020/03/29',
//     orderDesc: '蔬菜',
//     prodId:'645654',
//     userID:'678798',
//     orderStatus:'待发货'
//   },
//   {
//     num: '2',
//     key:'2',
//     _id: '231548746535',
//     orderTime: '2020/03/29',
//     orderDesc: '水果',
//     prodId:'645654',
//     userID:'678798',
//     orderStatus:'未付款'
//   },
//   {
//     num: '3',
//     key:'3',
//     _id: '231548746536',
//     orderTime: '2020/03/29',
//     orderDesc: '蔬菜',
//     prodId:'645654',
//     userID:'678798',
//     orderStatus:'运输中'
//   },
//   {
//     num: '4',
//     key:'4',
//     _id: '231548746537',
//     orderTime: '2020/03/29',
//     orderDesc: '蔬菜',
//     prodId:'645654',
//     userID:'678798',
//     orderStatus:'已完成'
//   },
// ];

const columns = [
  {
    title: '序号',
    dataIndex: 'num',
    key: 'num',
    align:'center'
  },
  {
    title: '订单编号',
    dataIndex: '_id',
    key: '_id',
    width:150,
    align:'center'
  },
  {
    title: '下单时间',
    dataIndex: 'orderTime',
    key: 'orderTime',
    align:'center'
  },
  
  {
    title: '产品ID',
    dataIndex: 'prodId',
    key: 'prodId',
    align:'center'
  },
  {
    title: '用户ID',
    dataIndex: 'userID',
    key: 'userID',
    align:'center'
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    align:'center'
  },
  {
    title: '订单详情',
    dataIndex: 'orderDesc',
    key: 'orderDesc',
    align:'center',
    render(h){
      return (
        <Fragment>
          {h}
          <Button type='link'>了解详情</Button>
        </Fragment>
      )
    }
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    align:'center',
    render(){
      return (
        <Fragment>
          <Button type='primary' size='small'>修改</Button>
          <Button type='danger' size='small'>删除</Button>
        </Fragment>
      )
    }
  },
];
class OrderList extends Component {
  state = {
    dataSource:[],
    columns : [
      {
        title: '序号',
        dataIndex: 'num',
        key: 'num',
        align:'center'
      },
      {
        title: '订单编号',
        dataIndex: '_id',
        key: '_id',
        width:150,
        align:'center'
      },
      {
        title: '下单时间',
        dataIndex: 'orderTime',
        key: 'orderTime',
        align:'center'
      },
      {
        title: '产品ID',
        dataIndex: 'prodId',
        key: 'prodId',
        align:'center'
      },
      {
        title: '用户ID',
        dataIndex: 'userID',
        key: 'userID',
        align:'center'
      },
      {
        title: '订单状态',
        dataIndex: 'orderStatus',
        key: 'orderStatus',
        align:'center'
      },
      {
        title: '订单详情',
        dataIndex: 'orderDesc',
        key: 'orderDesc',
        align:'center',
        render(h){
          return (
            <Fragment>
              {h}
              <Button type='link'>了解详情</Button>
            </Fragment>
          )
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align:'center',
        render(){
          return (
            <Fragment>
              <Button type='primary' size='small'>修改</Button>
              <Button type='danger' size='small'>删除</Button>
            </Fragment>
          )
        }
      },
    ]
  }
  getOrderList = () =>{
    orderApi.getOrderList().then((res)=>{
      console.log(res)
      let list = res.data.list.map((item,index)=>{
        item.num = index+1
        return item
      })
      console.log(list)
      this.setState({dataSource:list})
    })
  }
  componentDidMount(){
    this.getOrderList()
  }
  render() {
    let { columns,dataSource} = this.state
    return (
      <Card title='订单列表'>
        <select>
          <option value='1'>全部订单</option>
          <option value='2'>未付款</option>
          <option value='3'>待发货</option>
          <option value='4'>运输中</option>
          <option value='5'>已收货</option>
          <option value='6'>已完成</option>
        </select>
        <Table dataSource={dataSource} columns={columns} rowKey='_id' style = {{textAlign:'center'}}/>
      </Card>
      
    );
  }
}

export default OrderList;
