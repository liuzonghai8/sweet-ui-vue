import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import router from '@/router'

import { getToken } from '@/utils/auth' // getToken from cookie


NProgress.configure({ showSpinner: false })// NProgress configuration
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    console.log(getToken)
    NProgress.start();
    if (getToken) {
        if (to.path === '/login') {
            console.log("ss")
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            console.log("esle"),
                next()
            // if (store.getters.roles.length === 0) {
            //     store.dispatch('GetInfo').then(res => { // 拉取用户信息
            //         next()
            //     }).catch((err) => {
            //         store.dispatch('FedLogOut').then(() => {
            //             Message.error(err || 'Verification failed, please login again')
            //             next({ path: '/' })
            //         })
            //     })
            // } else {
            //     next()
            // }
        }
    }
    else {
        if (whiteList.indexOf(to.path) !== -1) { console.log("whiteList"), next() }
        else {
            console.log(NProgress)
            console.log("重定向")
            next('/login')
            NProgress.done()
        }
    }

    // console.log(NProgress), next()
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})

// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活的组件里调用离开守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫 (2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

// nprogress的介绍 可显示加载的进度条
// 将nprogress.js和nprogress.css添加到项目中。
// Simply call start() and done() to control the progress bar.
// NProgress.start();
// NProgress.done();
// https://github.com/rstacruz/nprogress