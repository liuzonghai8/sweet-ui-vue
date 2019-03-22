
export async function addObj (param) {
  return await axios.request({
    method: 'post',
    url: '/upms/sys/user',
    data: stringify(param)//param
  })
}


export function login (username, password) {
  return axios.request({
    url: '/upms/sys/user/login',
    method: 'post',
    data: {
      username,
      password
    }
    // data: stringify(param)//param
  })
}

export function getInfo (token) {
  return request({
    url: '/upms/sys/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/upms/sys/user/logout',
    method: 'post'
  })
}
