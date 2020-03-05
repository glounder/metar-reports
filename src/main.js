import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Plugins from '@/plugins'

Vue.config.productionTip = false

Vue.use(Plugins, { store, router, vuetify })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
