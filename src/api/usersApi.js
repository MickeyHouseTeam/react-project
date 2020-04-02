import axios from 'axios';

class Users {
  list(page=1,pageSize=5){
    let url="/fruit/user/getinfos"
    return axios.post(url,{page,pageSize})
  }
  updata(_id,state){
    console.log(111,_id,state)
    let url="/fruit/user/update"
    return axios.post(url,{_id,state})
    
  }
  findKey(kw,page=1,pageSize=5){
    let url="/fruit/user/key"
    return axios.post(url,{kw,page,pageSize})
  }
 
}

export default  new Users()