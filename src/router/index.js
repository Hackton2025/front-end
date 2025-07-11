import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateAccountViews from '@/views/CreateAccountViews.vue'
import PerfilPageComponents from '@/components/PerfilPageComponents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nova-conta',
      name: 'createAccount',
      component: CreateAccountViews,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilPageComponents,
    },
  ],
})

export default router
