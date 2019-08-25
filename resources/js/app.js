import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './components/App'

import './plugins'
import './components'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter(routes),
  components: { App },
  template: '<App/>'
})
