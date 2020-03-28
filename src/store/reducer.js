import state from './state';
import {CHANGE_TOKEN_MODEL} from './actionTypes';
export default (preState = state,actions)=>{
  let newData = JSON.parse(JSON.stringify(preState))
  let {type,payload} = actions
  switch (type) {
    case CHANGE_TOKEN_MODEL://修改token 模态框
      newData.tokenModel = payload
      break;
  
    default:
      break;
  }
  return newData
}