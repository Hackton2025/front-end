<script setup>
import headerComponent from "./headerComponent.vue";
import router from "@/router";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
const store = useUserStore();
const postStore = usePostStore();
</script>
<template>
  <headerComponent></headerComponent>
  <main>
    <section class="posts">
      <RouterLink :to="{ name: 'home' }" class="voltar"><span class="mdi mdi-arrow-left"></span>
        <h2>Voltar</h2>
      </RouterLink>
      <div class="geral">
        <div class="botoes">
          <button @click="router.push('/criar-postagem')" class="postar">
            <span class="mdi mdi-plus"></span>
            <p class="postagem">Adicionar Postagem</p>
          </button>
          <button @click="router.push('/criar-comunidade')" class="criarC"><span
              class="mdi mdi-account-multiple"></span>
            <p class="comunidade">Criar Comunidade</p>
          </button>
          <!-- <button class="gerenciar">
            <span class="mdi mdi-account-edit"></span>
            <p class="gerenciar">Criar Comunidade</p></button> -->
          <!-- <RouterLink to="/controle-acesso" class="button-link acess">
            <span class="mdi mdi-key-variant"></span>
            <p class="controle">Controle de Acesso</p>
          </RouterLink> -->
          <button @click="router.push('/enviar-mensagem-em-massa')" class="massivas">
            <span class="mdi mdi-alert"></span>
            <p class="massivas">Mensagens Massivas</p>
          </button>
        </div>
      </div>
    </section>

    <section class="user">
      <div class="author">
        <img :src="store.profileImagePreview
          || (store.profile.first_profile_image_url
            ? store.profile.first_profile_image_url
            : '/img/default-avatar.png')" class="avatar" />
        <h2>{{ store.usuario.fullname }}</h2>
        <p>@{{ store.usuario.name }}</p>
      </div>
      <div class="posts-geral">
          <ul>
            <li v-for="post in postStore.posts" :key="post.uuid">
              <img :src="post.image_url" alt="POST" v-if="post.image_url" class="imgPost" />
            </li>
          </ul>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  padding: 0 2vw 2vw 2vw;
  display: flex;
}

section.posts {
  width: 35%;
  padding-right: 2vw;
  border-right: 1px solid #ccc;
}

.geral {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  margin-bottom: 10px;
  flex-direction: column;
  background-color: #FFFF;
  width: 100%;
  border-radius: 5px;
  height: 100vh;
  padding: auto 0;
}

.geral div button,
.button-link.acess {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: #2f9e41;
  cursor: pointer;
  color: white;
  width: 80%;
  border-radius: 5px;
  height: 3.5vw;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.2rem;
  border: none;
  text-decoration: none;

  &:nth-child(1) {
    margin-top: 2vw;
  }

  &:nth-child(2) {
    margin: 4vw auto;
  }

  &:nth-child(3) {
    margin-bottom: 4vw;
  }

  &:nth-child(4) {
    margin-bottom: 4vw;
  }
}

.voltar {
  display: flex;
  align-items: center;
  margin-left: 2vw;
  gap: 10px;
  font-size: 1.3rem;
  margin-bottom: 1.5vw;
  background: none;
  border: none;
  text-decoration: none;
  color: inherit;
  margin-top: 1vw;
}

.voltar span {
  font-size: 2.5vw;
  margin-left: 1px;
}

.geral div.botoes {
  margin: auto auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

div.botoes button.massivas {
  margin-top: 150px;
  background: red;
  margin-bottom: 2vw;
}


section.user {
  width: 80%;
  gap: 0;

} 

section.user .author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #FFFF;
  padding: 2vw 0;
  border-radius: 20px;
}

.author .avatar {
  width: 15%;
  height: 20vh;
  border: solid 1px black;
  border-radius: 0px;
}

.author h2 {
  font-size: 2rem;
  margin: 0;
}

.author p {
  font-size: 1.2rem;
  margin: 0;
  color: gray;
}
.posts-geral {

  margin-top: 2vw;

  gap: 0;
}
.posts-geral ul {
  margin-top: 2vw;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;/* Permite que as imagens quebrem para a linha seguinte se não caberem */
  gap: 0;               /* Remove qualquer espaço entre as imagens */
}
.posts-geral ul li{
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
  width: 33.33%;       /* Cada item ocupa um terço da largura do contêiner */
}

.posts-geral img {
  padding: 0;
  margin: 0;
  width: 100%;           /* Largura de 33% para garantir 3 imagens por linha */
  height: 50vh;            /* Altura fixa para as imagens */
  border-radius: 0;
  object-fit: cover;       /* Garante que as imagens se ajustem sem distorcer */
}


</style>