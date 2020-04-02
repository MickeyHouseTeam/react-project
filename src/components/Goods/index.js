import React,{Component} from 'react'

import {Pagination,Card,message,Table,Tag,Button,Popconfirm} from 'antd'
import axios from 'axios'

const data = [
    {title:'_id',dataIndex:'_id'},
    {title:'简介',dataIndex:'account'},
    {title:'价格',dataIndex:'quantity'},
    {title:'折扣价',dataIndex:'current'},
    {title:'缩略图',dataIndex:'img'},
    {title:'操作',key:'operate'},
]

var arr = ['真棒','哈哈','莅临']
class App extends Component{
    constructor(){
      super()
      this.state={
        data1:[]
      }
    }
    componentDidMount(){
      var url = '/fruit/admin'
      axios.get(url).then((res)=>{
        console.log(res)
      })
    }
    render(){
       var {data1} = this.state
        return (
            <Card type="inner" title="商品列表" extra={<select>
                {arr.map((item,index)=>{
                        return(
                        <option value={item} key={index}>{item}</option> 
                        )
                })}
            </select>}>
            <Table 
                scroll={ {y:300,x:840} }
                pagination={false}
                columns={data} 
                dataSource={data1} 
                rowKey='_id'>
            </Table>
            </Card>
        )
    }
      
      
}


export default App