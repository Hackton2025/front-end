import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateAccountViews from '@/views/CreateAccountViews.vue'
import createCommunityView from '@/views/createCommunityView.vue'
import userInstituicaoView from '@/views/userInstituicaoView.vue'
import ControleDeAcessoView from '@/views/controleDeAcessoView.vue'
import sendMassiveMessageView from '@/views/sendMassiveMessageView.vue'
import pagUserComponent from '@/components/pagUserComponent.vue'
import configPanelComponent from '@/components/configPanelComponent.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import verOutrosUsersView from '@/views/verOutrosUsersView.vue'
import verOutrasInstituicoesComponent from '@/components/verOutrasInstituicoesComponent.vue'
import criarInstitutoView from '@/views/criarInstitutoView.vue'
import CommunityView from '@/views/CommunityView.vue'


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
    {
      path: '/enviar-mensagem-em-massa',
      name: 'enviarMensagemEmMassa',
      component: sendMassiveMessageView,
    }, 
     {
      path: '/instituicao',
      name: 'verInstituicao',
      component: verOutrasInstituicoesComponent,
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
    },
    {
      path:"/criar-instituto",
      name:"criarInstituto",
      component: criarInstitutoView,
    },
    {
      path: '/comunidade/:uuid',
      name: 'comunidade',
      component: CommunityView,
    },
  ],
})

export default router
