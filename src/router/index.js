import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateAccountViews from '@/views/CreateAccountViews.vue'
import createCommunityView from '@/views/createCommunityView.vue'
import userInstituicaoView from '@/views/userInstituicaoView.vue'
import ControleDeAcessoView from '@/views/controleDeAcessoView.vue'

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
      path: '/criar-comunidade',
      name: 'criarComunidade',
      component: createCommunityView,
    },
    {
      path: '/instituicao',
      name: 'instituicao',
      component: userInstituicaoView,
    },
    {
      path: '/controle-acesso',
      name: 'controleDeAcesso',
      component: ControleDeAcessoView
    },

  ],
})

export default router
