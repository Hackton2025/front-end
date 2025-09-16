import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateAccountViews from '@/views/CreateAccountViews.vue'
import createCommunityView from '@/views/createCommunityView.vue'
import sendMassiveMessageView from '@/views/sendMassiveMessageView.vue'
import pagUserComponent from '@/components/pagUserComponent.vue'
import configPanelComponent from '@/components/configPanelComponent.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import verOutrosUsersView from '@/views/verOutrosUsersView.vue'

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
      path: '/enviar-mensagem-em-massa',
      name: 'enviarMensagemEmMassa',
      component: sendMassiveMessageView,
    }, 
    {
      path: '/criar-postagem',
      name: 'criarPostagem',
      component: CreatePostView,
    },
    {
      path:"/usuario/:uuid",
      name:"verUsuario",
      component: verOutrosUsersView,
      props: true,
    }
  ],
})

export default router
