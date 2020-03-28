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
        title:"待发货",
        path:'/admin/order/wait'
       },
      {
       key:'5-2',
       title:"运输中",
       path:'/admin/order/transport'
     },
     {
      key:'5-3',
      title:"已收货",
      path:'/admin/order/Received'
    },
    {
      key:'5-4',
      title:"已完成",
      path:'/admin/order/finished'
    }
    ]
   },
  {
    key:'6',
    title:'数据统计',
    icon:'user',
    children:[
      {
        key:'6-1',
        title:"饼状图",
        path:'/admin/echarts/pie'
       },
      {
       key:'6-2',
       title:"折线图",
       path:'/admin/echarts/line'
     },
     {
      key:'6-3',
      title:"柱状图",
      path:'/admin/echarts/histogram'
    }
    ]
   },
  {
    key:'9',
    title:"设置",
    icon:'set',
    path:'/admin/set'
  },
]
// 递归测试数据
// export default [
//   {
//     key:'1',
//     title:"首页",
//     path:'/admin/home'
//   },
//   {
//     key:'2',
//     title:'管理员',
//     children:[
//       {
//         key:'2-1',
//         title:'管理员添加',
//         path:'/admin/admin/add'
//       },
//       {
//         key:'2-2',
//         title:'管理员修改',
//         path:'/admin/admin/update',
//         children:[
//           {
//             key:'2-2-1',
//             title:'管理员修改1',
//             path:'/admin/admin/update1'
//           },
//           {
//             key:'2-2-2',
//             title:'管理员修改2',
//             path:'/admin/admin/update1'
//           },
//           {
//             key:'2-2-3',
//             title:'管理员修改3',
//             path:'/admin/admin/update1',
//             children:[
//               {
//                 key:'2-2-3-1',
//                 title:'管理员修改3-1',
//               },
//               {
//                 key:'2-2-3-2',
//                 title:'管理员修改3-2',
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     key:'9',
//     title:"设置",
//     path:'/admin/set'
//   }
// ]