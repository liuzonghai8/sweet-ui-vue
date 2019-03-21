import { set, toggle } from '@/utils/vuex'
import { getMenuTree } from '@/api/sys/menu'
export default {
  //setDrawer: set('drawer'),
  // setImage: set('image'),
  // setColor: set('color'),
  // toggleDrawer: toggle('drawer')
  setMenus (state) {
    getMenuTree().then(resp => state.user.menus = resp.data.data)
  }
}
