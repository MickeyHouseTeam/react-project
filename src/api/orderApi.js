import axios from 'axios';

class Order {
  getOrderList = async (_id,page=1,pageSize=5,orderStatus='全部订单',kw=null) =>{ //获取订单列表
    console.log(kw)
    let url = '/fruit/admin/order/list'
    return await axios.get(url,{params:{_id,page,pageSize,orderStatus,kw}})
  }

  orderAdd(obj){  //添加
    // console.log(obj)
    let url = '/fruit/admin/order/insert'
    return axios.post(url,obj)
  }
  orderDelById = (_id) =>{  //删除
    console.log(_id)
    let url = '/fruit/admin/order/del'
    return axios.post(url,{_id})
  }
  orderUpdateById = (obj) =>{  //修改 obj 代表一个对象参数 
    console.log(obj)
    let url = '/fruit/admin/order/update'
    return axios.put(url,obj) 
  }
}

export default  new Order()