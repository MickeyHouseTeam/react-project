export default[
  {
    key:'1',
    title:"首页",
    icon:'HomeOutlined',
    path:'/admin'
  },
  {
    key:'2',
    title:"管理员管理",
    icon:'admin',
    path:'/admin/administrators'
  },
  {
    key:'3',
    title:"商品管理",
    icon:'goods',
    children:[
      {
        key:'3-1',
        title:"商品列表",
        path:'/admin/goodslist',
       },
      {
       key:'3-2',
       title:"商品添加",
       path:'/admin/goodsadd'
     }
    ]
  },
  {
   key:'4',
   title:'用户管理',
   icon:'user',
   children:[
     {
       key:'4-1',
       title:"用户添加",
       path:'/admin/useradd'
      },
     {
      key:'4-2',
      title:"用户列表",
      path:'/admin/userlist'
    }
   ]
  },
  {
    key:'5',
    title:'订单管理',
    icon:'order',
    children:[
      {
        key:'5-1',
        title:"订单列表",
        path:'/admin/order/list'
      },
      {
       key:'5-2',
       title:"订单添加",
       path:'/admin/order/add'
      }
    ]
   },
  {
    key:'6',
    title:'数据统计',
    icon:'user',
    path:'/admin/echarts'
    // children:[
    //   {
    //     key:'6-1',
    //     title:"饼状图",
    //     path:'/admin/echarts/pie'
    //    },
    //   {
    //    key:'6-2',
    //    title:"折线图",
    //    path:'/admin/echarts/line'
    //  },
    //  {
    //   key:'6-3',
    //   title:"柱状图",
    //   path:'/admin/echarts/histogram'
    // }
    // ]
   },
  {
    key:'9',
    title:"设置",
    icon:'set',
    path:'/admin/set'
  },
]
