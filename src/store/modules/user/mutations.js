import { set, toggle } from '@/utils/vuex'
export default {
  //setDrawer: set('drawer'),
  // setImage: set('image'),
  // setColor: set('color'),
  // toggleDrawer: toggle('drawer')
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_ROLES: (state, roles) => {
  //   state.roles = roles
  // }
  SET_TOKEN: set('token'),
  SET_ROLES: set('roles'),
  SET_AVATAR: set('avatar'),
  SET_NAME: set('name')
}
