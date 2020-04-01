import React, { Component, Fragment } from 'react';
import {Card,Table, Button,Pagination,message,Spin,Popconfirm,Select,Input} from 'antd';
import orderApi from '@api/orderApi';
const { Option } = Select;
const { Search } = Input;
class OrderList extends Component {
  state = {
    page:1,  //当前页码
    pageSize:3,  //每页条数
    allCount:0,  //订单列表数据条数
    spinning:false,  //加载动画
    kw:'',//关键字
    orderStatus:'全部订单',  //订单列表切换
    dataSource:[],  //订单数据
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
        dataIndex: 'userId',
        key: 'userId',
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
        // dataIndex: 'action',
        // key: 'action',
        align:'center',
        render:(h)=>{
          // console.log(h)
          return (
            <Fragment>
              <Button type='primary' size='small' onClick={()=>{
                this.props.history.push({pathname:'/admin/order/update',state:{_id:h._id}})
              }}>修改</Button>
              <Popconfirm 
                placement="topRight"
                title={'确定删除吗？删除后无法找回'}
                okText="确定"
                cancelText="取消"
                onConfirm={()=>{
                  console.log(this.state.page)
                  this.orderDelById(h._id)
                  
                }}
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
            </Fragment>
          )
        }
      },
    ]
  }
  
  getOrderList = (_id,page,pageSize,orderStatus,kw='') =>{  //获取商品列表
    this.setState({spinning:true})
    console.log(_id,page,pageSize,orderStatus,kw)
    orderApi.getOrderList(_id,page,pageSize,orderStatus,kw).then((res)=>{
      // console.log(res)
      let list = res.data.list.map((item,index)=>{
        item.num = index+1
        return item
      })
      console.log(list)
      this.setState({dataSource:list,allCount:res.data.allCount,spinning:false})
    })
    .catch((error)=>{
      console.log(error)
      // message.error(error)
    })
  }
  orderDelById = async (id) =>{  //删除
    console.log(id)
    let {page,pageSize,kw} = this.state
    console.log(page,kw)
    let result = await orderApi.orderDelById(id)
    console.log(result.data)
    if(result.data.code===200){
      message.success(result.data.msg)
      this.getOrderList(null,page,pageSize,kw)
    }else{
      message.error(result.data.msg)
    }
  }
  componentDidMount(){
    let {page,pageSize,orderStatus} = this.state
    // null : _id 占位  此处不需要id 用null占位
    this.getOrderList(null,page,pageSize,orderStatus)
  }
  render() {
    let { columns,dataSource,allCount,page,pageSize,spinning,orderStatus,kw} = this.state
    return (
      <Card title='订单列表'>
        <Spin spinning={spinning}>
          <div style={{margin:10,position:"relative"}}>
            <Select defaultValue='全部订单' size='small' 
              style={{marginRight:10}} onChange={(e)=>{
                console.log(e)
                this.setState({page:1,orderStatus:e},()=>{
                  console.log(page,orderStatus)
                  this.getOrderList(null,1,pageSize,e,kw)
                })
              }}>
              <Option value='全部订单'>全部订单</Option>
              <Option value='未付款'>未付款</Option>
              <Option value='待发货'>待发货</Option>
              <Option value='运输中'>运输中</Option>
              <Option value='已收货'>已收货</Option>
              <Option value='已完成'>已完成</Option>
            </Select>
            <Button type='ghost' size='small' onClick={()=>{
              this.props.history.push('/admin/order/add')
            }}>添加订单</Button>
            <Search
              placeholder="关键词搜索"
              size="small"
              style={{ width: 150 ,position:"absolute",top:'0',right:0}}
              onSearch={(value) => {
                this.setState({kw:value,page:1})
                this.getOrderList(null,1,pageSize,orderStatus,value)
              }}
            />
          </div>
          <Table dataSource={dataSource} columns={columns} rowKey='_id' scroll={{y:500,x:300}} pagination={false}/>
          <Pagination
            current={page}
            pageSize={pageSize}
            total={allCount} 
            showQuickJumper
            showTotal={() => `共 ${allCount} 条数据`}
            onChange = {(e)=>{
              this.setState({page:e},()=>{
                console.log(e,page)
                this.getOrderList(null,e,pageSize,orderStatus,kw)
              })
            }}
          />
        </Spin>
        
      </Card>
      
    );
  }
}

export default OrderList;
