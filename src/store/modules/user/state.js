//import routes from '@/router/route'
export default {
  menus: [{
    path: '/',
    component: 'Layout',
    children: [
      {
        path: '/dashboard', component: 'Dashboard'
      },
      {
        path: '/user', component: 'sys/user/User'
      },
      {
        path: '/menu', component: 'sys/menu/Menu'
      },
      {
        path: '/role', component: 'sys/role/Role'
      },
    ]
  }]
}
