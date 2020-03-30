import axios from 'axios';

class Order {
  getOrderList = async () =>{
    let url = '/fruit/admin/order/all'
    return await axios.get(url)
  }

}

export default  new Order()