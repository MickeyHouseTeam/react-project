import React, { Component } from 'react'
import {Card,Table,Button, message,Pagination,Spin,Popconfirm,Input} from 'antd'
import userApi from "../../api/usersApi"
let routPath="http://localhost:3000/public" 
// const { Search } = Input;
class users extends Component {
  state={
    page:1,//页码
    pageSize:5,//每页显示的条数
    result:[],//列表数据
    allCount:0,//总数量
    kw:'',
    columns:[
      {
        title: '头像',
        dataIndex: 'autorimg',
        key: 'autorimg',
        render(autorimg){
          // console.log("图片路径",autorimg)
         return(<img src={routPath+autorimg} alt="图片" style={{height:'30px',width:'30px'}}/>)
        },
        width:120,
        fixed:"left"
      },
      {
        title: '名字',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '简介',
        dataIndex: 'content',
        key: 'content',
        width:120,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render:(data)=>{
          // console.log("he",data)
          if(data===false){
            return <span style={{color:'red'}}>注销</span>
          }else if(data===true){
            return <span>运行</span>
          }
        }
      },
      {
        title: '注册日期',
        dataIndex: 'birth',
        key: 'birth',
      },
      {
        title: '操作',
       
        render:(h)=>{
          
         return (
            <Button 
            disabled={h.state===false}
            onClick={()=>{
              // console.log(h._id,h.state)
              this.upda(h._id,h.state)
            }}>操作</Button>
         )
        
        },
        width:100,
        fixed:'right'
      },
    ],
    loadingState:true//加载动画默认true
  }
  componentDidMount(){
    this.getuserdata();
  }
  upda= async (_id,state,page)=>{
    console.log(page)
    if(state===true){
      state=false
    }
    let msg=await userApi.updata(_id,state)
    if(msg.data){
      message.success("修改成功")    
      this.getuserdata()
    }
  }
  getuserdata= async ()=>{
    this.setState({
      loadingState:true
    })
    let {page,pageSize}=this.state
    let {code}=await (await userApi.list(page,pageSize)).data
    let {result,allCount}=await (await userApi.list(page,pageSize)).data.msg
    // console.log(result,allCount)
    if(code===0){
      return message.error("错误")
    }
    this.setState({result,allCount},()=>{
      this.setState({
        loadingState:false
      })
    })
    // console.log("总条数",allCount)
  }
 findg=async(kw,page,pageSize)=>{
  let value=this.refs.text.state.value;
  let {code}=await(await (userApi.findKey(kw=value,page,pageSize))).data
  let {result}=await(await (userApi.findKey(kw=value,page,pageSize))).data.msg
   let allCount=result.length
   console.log(allCount)
  if(code===0){
    return message.error("错误")
  }
  // console.log(result)
   console.log(allCount)
  this.setState({result,allCount},()=>{
    this.setState({
      loadingState:false
    })
  })

 }
  render() {
    let {result,columns,allCount,pageSize,loadingState,kw,page} =this.state
    return (
      <div>
        <Card  title="用户列表">
        {/* <Search
          placeholder="关键词搜索"
          ref="value"
          onSearch={(value) => {
            this.search()
          }}
          style={{ width: 200 }}
        /> */}
        <Input placeholder="请输入查找关键词" ref="text"/>
        <Button onClick={()=>{
          this.findg(kw,page,pageSize)
        }}>查找</Button>
           <Spin tip="loading" spinning={loadingState}>
            <Table 
            scroll={{y:300,x:500}}
            pagination={false}
            columns={columns} 
            dataSource={result} 
            rowKey="_id" 
            />
            {/* 分页*/}
            <Pagination 
            
            total={allCount} 
            showQuickJumper 
            pageSize={pageSize}
            onChange={(page,pageSize)=>{
                // console.log(page)
                this.setState({page},()=>{
                  this.getuserdata()
                })
            }}
            />
           </Spin>
        </Card>
      </div>
    )
  }
}
export default users;