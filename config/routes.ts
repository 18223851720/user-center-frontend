export default [
  {
    path: '/user', layout: false, routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'}
    ]
  },

  {path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome'},
  {path: '/list', name: 'TableList', icon: 'table', component: './TableList'},

  {
    path: '/admin',
    name: 'Manage',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user-manage', name: 'UserManage', icon: 'smile', component: './Admin/UserManage'},
      {component: './404'},
    ],
  },
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
