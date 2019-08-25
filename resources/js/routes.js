function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`)
}

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: page('Welcome.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: page('Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: page('auth/register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: page('Home.vue')
    },
    {
      path: '*',
      component: page('NotFound.vue')
    }
  ]
}
