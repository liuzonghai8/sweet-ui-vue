// https://vuex.vuejs.org/en/getters.html

export default {
  //
  token: state => state.user.token,
  roles: state => state.user.roles,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.avatar
}
