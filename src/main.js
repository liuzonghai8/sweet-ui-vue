import Vue from 'vue'

//Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

import '@/styles/index.scss' // global css
//
import App from './App.vue'
import router from '@/router'
import store from '@/store'

//permission control
import './permission'
// icon
import './icons'
// Sync store with router
sync(store, router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

