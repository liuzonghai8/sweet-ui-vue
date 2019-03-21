import { stringify } from 'qs'

//查询 分页
export async function fetchObjs (params) {
    return await axios.request({
        method: 'get',
        url: 'upms/sys/user/page',
        params: params
    })
}

// //根据Id查询
// export async function getObj0 (id) {
//     return await axios.request({
//         method: 'get',
//         url: 'upms/sys/user/' + id,
//     })
// }
//根据Id查询  箭头函数写法
export const getObj = async (id) => {
    return await axios.request({
        method: 'get',
        url: 'upms/sys/user/' + id,
    })
}
//根据Id删除
export async function deleteObj (id) {
    return await axios.request({
        method: 'delete',
        url: 'upms/sys/user/' + id
    })
}

//添加
export async function addObj (param) {
    return await axios.request({
        method: 'post',
        url: '/upms/sys/user',
        data: stringify(param)//param
    })
}
//更新
export async function putObj (param) {
    return await axios.request({
        method: 'put',
        url: '/upms/sys/user',
        data: stringify(param)
    })
}

//根据用户id和角色id删除对应关系
export async function deleteUserRole (param) {
    return await axios.request({
        method: 'delete',
        url: 'upms/sys/user/role',
        params: param
    })
}

//添加
export const addUserRole = async (param) => {
    return await axios.request({
        method: 'post',
        url: '/upms/sys/user/role',
        data: stringify(param)
    })
}