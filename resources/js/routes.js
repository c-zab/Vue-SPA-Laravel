function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`)
}

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: page('Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: page('Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: page('Register.vue')
    },
    {
      path: '*',
      component: page('NotFound.vue')
    }
  ]
}
