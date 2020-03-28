import React, { Component, Fragment } from 'react';
import { Card,Button} from 'antd';
import actionCreator from '../../store/actionCreator'
import {bindActionCreators } from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class TokenModal extends Component {
 
  render() {
    console.log(this.props)
    let {tokenModel,CHANGE_TOKEN_MODEL} = this.props
    console.log(tokenModel)
    return ( 
      <Fragment>
        {!tokenModel ||
        <div style={{
          position:"fixed",
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'rgba(0,0,0,.3)',
          zIndex:10,
          display:'flex',
          justifyContent: "center",
          alignItems:"center"
        }}>
         <Card  title='token失效' style={ { width:'300px',height:"300px"} }>
           当前token 失效请重新登录 
           <Button onClick={()=>{
             CHANGE_TOKEN_MODEL(false)
             this.props.history.replace('/login')
           }}>GO LOGIN </Button>
         </Card> 
        </div>
        }
      </Fragment>
     );
  }
}
 

// withRouter 处理组件  使组件获取路由对象
// connect  使组件可以获取全局状态值 将store 和 dispatch 映射到props
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(actionCreator,dispatch)
})(withRouter(TokenModal));