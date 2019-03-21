import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      component: () => import('@/views/layout/Layout'),
      redirect: '/dashboard',
      name: 'Dashboard',
      hidden: true,
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }



})
//router.beforeEach((to, from, next) => { console.log(to) })


//   beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       // this route requires auth, check if logged in
//       // if not, redirect to login page.
//       if (!auth.loggedIn()) {
//         next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//         })
//       } else {
//         next()
//       }
//     } else {
//       next() // 确保一定要调用 next()
//     }
//   })




