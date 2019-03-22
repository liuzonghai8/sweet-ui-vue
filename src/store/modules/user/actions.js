import { login, logout, getInfo } from '@/api/login'
import { removeToken } from '@/utils/auth'

export default {
    // 登录
    Login ({ commit }, userInfo) {
        const username = userInfo.username.trim()
        return new Promise((resolve, reject) => {
            login(username, userInfo.password).then(response => {
                const data = response.data
                setToken(data.token)
                commit('SET_TOKEN', data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    //test
    TestLogin ({ commit }) {
        commit('SET_TOKEN', 'ddddd')
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
        console.log("state")
        return new Promise((resolve, reject) => {
            // const data = { roles: 'ddd', name: 'name', avatar: 'avatar' }
            // commit('SET_ROLES', data.roles)
            // commit('SET_NAME', data.name)
            // commit('SET_AVATAR', data.avatar)

            getInfo(state.token).then(response => {
                console.log(state.token)
                const data = response.data
                if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                    commit('SET_ROLES', data.roles)
                } else {
                    reject('getInfo: roles must be a non-null array !')
                }
                commit('SET_NAME', data.name)
                commit('SET_AVATAR', data.avatar)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 登出
    LogOut ({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    //test
    TestLogOut ({ commit }) {
        // commit('SET_TOKEN', '')
        //commit('SET_ROLES', [])
        removeToken()
    },

    // 前端 登出
    FedLogOut ({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}

