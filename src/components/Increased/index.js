import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom'
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Card,
} from 'antd';
import axios from 'axios'
import { QuestionCircleOutlined } from '@ant-design/icons';
// var list = ['名称','简介','图片','类型','现价','折扣价','上架时间']
 var list = [
   {'title':'名称','title1':'name'},
   {'title':'简介','title1':'account'},
   {'title':'图片','title1':'img'},
   {'title':'类型','title1':'Type'},
   {'title':'现价','title1':'quantity'},
   {'title':'折扣价','title1':'current'},
   {'title':'上架时间','title1':'time'},
   {'title':'构建','title1':'norms'},
 ]
  class App extends Component{
    constructor(){
      super()
      this.state={
        bool:true
      }
    }
      GainValue(value){
        return value.props.value
      }
      KeyDown=()=>{
        var {refs} = this

        setTimeout(() => {
          if(refs['name'].props.value
          && refs['account'].props.value 
          && refs['img'].props.value 
          && refs['Type'].props.value 
          && refs['quantity'].props.value 
          && refs['current'].props.value 
          && refs['time'].props.value 
          &&refs['norms'].props.value){
            this.setState({
              bool:false
            })
            }else{
              this.setState({
                bool:true
              })
          }
        }, 200);
         
      }
      render(){
        return (
          <Card  title="新增列表" >
            <Form
              name="register"
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              style={{paddingLeft:'40px'}}
              scrollToFirstError
            >
            {list.map((item,index)=>{
                return(
                  <Form.Item
                  name={index}
                  label={item.title}
                  key={index}
                >
                  <Input onKeyDown={this.KeyDown} style={{width:'400px'}} ref={item.title1}/>
                </Form.Item>
                )
            })}
             <Button type="primary" disabled={this.state.bool} onClick={()=>{
              var {GainValue} = this
              var {Type,name,account,current,img,quantity,time,norms} = this.refs
              var obj={
                Type:GainValue(Type),
                name:GainValue(name),
                account:GainValue(account),
                current:GainValue(current),
                img:GainValue(img),
                quantity:GainValue(quantity),
                time:GainValue(time),
                norms:GainValue(norms)
              }
              var url ='/fruit/admin/insertMany'
              var params = new URLSearchParams()
              params.append('obj',JSON.stringify(obj))
              axios.post(url,params, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then((res)=>{
                console.log(res)
              })
             }}>提交</Button>
            </Form>
          </Card>
            
          );
      } 
  }
  

export default withRouter(App)