function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`)
}

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: page('Welcome.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: page('auth/login.vue')
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
      path: '/files',
      name: 'files',
      component: page('file/files.vue')
    },
    {
      path: '/file/upload',
      name: 'file.upload',
      component: page('file/upload.vue')
    },
    {
      path: '/file/update',
      name: 'file.update',
      component: page('file/update.vue')
    },
    {
      path: '/file/delete',
      name: 'file.delete',
      component: page('file/delete.vue')
    },
    {
      path: '*',
      component: page('NotFound.vue')
    }
  ]
}
