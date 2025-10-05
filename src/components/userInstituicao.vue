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

        </div>
      </div>
    </section>

    <section class="user">

      <div class="author">

        <div class="corDiferente">
        </div>

        <div class="informacao">
          <div class="lateral">
            <img :src="store.profileImagePreview
              || (store.profile.first_profile_image_url
                ? store.profile.first_profile_image_url
                : '/img/default-avatar.png')" class="avatar" />
          </div>
          <div class="resto">
            <h2>{{ store.usuario.name }}</h2>
            <p>@{{ store.usuario.fullname }}</p>
          </div>

        </div>

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
  height: 40vh;
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
  background-color: white;
  margin-top: 2vw;
  border-radius: 8px;
}

section .corDiferente {
  background-color: #2f9e41;
  width: 100%;
  padding: 4vw;
  border-radius: 8px 8px 0 0;
}


section.user .informacao {
  display: flex;
}
section
section.user .author {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #FFFF;
  border-radius: 20px;
}

.author .avatar {
  width: 90%;
  height: 20vh;
  border: solid 1px black;
  border-radius: 50%;
  margin: -6vw 0 0 2vw;
}

.author h2 {
  font-size: 2rem;
  margin: -3vw 0 0 2vw;
  color: white;
}

.author p {
  font-size: 1.1rem;
  margin: 0.7vw 0 2vw 2vw;
  color: #0000007a;
}
.informacao button {
  border: 2px solid #2f9e41;
  color: #2f9e41;
  padding: 4px 40px;
  border-radius: 10px;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
  margin-top: 3vw;
  margin-bottom: 0.5vw;
}
.posts-geral {
  margin: 1vw 1vw 2vw 1vw;
  gap: 0;
}

.posts-geral ul {
  margin-top: 2vw;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  /* Permite que as imagens quebrem para a linha seguinte se não caberem */
  gap: 0;
  /* Remove qualquer espaço entre as imagens */
}

.posts-geral ul li {
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
  width: 33.33%;
  /* Cada item ocupa um terço da largura do contêiner */
}

.posts-geral img {
  padding: 0;
  margin: 0;
  width: 100%;
  /* Largura de 33% para garantir 3 imagens por linha */
  height: 50vh;
  /* Altura fixa para as imagens */
  border-radius: 0;
  object-fit: cover;
  /* Garante que as imagens se ajustem sem distorcer */
}


@media (max-width: 768px) {
  main {
    flex-direction: column;
  }
  section.posts,
  section.user {
    width: 100%;
    border-right: none;
  }
  .geral{
    height: auto;
    padding: 4vw 0;
    margin-top: 4vw;
  }
  .voltar{
    margin-top: 3vw;
  }
  .mdi.mdi-arrow-left{
    font-size: 1.5rem;
  }
  .geral .botoes button{
    padding: 15px 30px;
  }

  .geral .botoes button:first-child {
    margin-bottom: 3vw;
  }
 
  section
  .corDiferente{
    width: 100%;
    height: 8vh;
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
  }
  .informacao img.avatar {
    margin-top: -10vw;
    width: 100%;
    height: auto;
  }
  .informacao .resto h2 {
    font-size: 1.4rem;
    margin: -6vw 40vw 0 5vw;
  }
  .informacao .resto p {
    font-size: 1rem;
    margin: 1vw 40vw 2vw 5vw;
  }
  .posts-geral ul li {
    width: 50%;
    padding: 0.25rem;
  }
  .posts-geral img {
    height: 30vh;
  }
}





</style>