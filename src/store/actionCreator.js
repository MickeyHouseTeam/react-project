import {CHANGE_TOKEN_MODEL} from './actionTypes';
export default {
  [CHANGE_TOKEN_MODEL](bool){//修改token 模态框
    return {
      type:CHANGE_TOKEN_MODEL,
      payload:bool
    }
  }
}