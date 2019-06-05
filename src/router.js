import Vue from 'vue'
import Router from 'vue-router'
import Usuario from './views/Usuarios.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'usuarios',
      component: Usuario
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/Registro.vue')
    },
    {
      path: '/usuario',
      name: 'usuarios',
      component: () => import(/* webpackChunkName: "registro" */ './views/Usuarios.vue')
    },
    {
      path: '/usuario/nuevo',
      name: 'nuevo',
      component: () => import(/* webpackChunkName: "registro" */ './views/NuevoUsuario.vue')
    },
    {
      path: '/usuario/modificar',
      name: 'modificar',
      component: () => import(/* webpackChunkName: "registro" */ './views/ModificarUsuario.vue')
    },
    {
      path: '/usuario/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "registro" */ './views/Usuario.vue')
    },
    {
      path: '/informe',
      name: 'informe',
      component: () => import(/* webpackChunkName: "registro" */ './views/Informe.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import(/* webpackChunkName: "registro" */ './views/Panel.vue')
    }
  ]
})
