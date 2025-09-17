<script setup>
import headerComponent from './headerComponent.vue';
import { useUserStore } from '@/stores/user';
import { useFollowerStore } from '@/stores/follower';
import { useContentStore } from '@/stores/content';
import { usePostStore } from '@/stores/post';
import router from '@/router';

const storeUser = useUserStore();
const followerStore = useFollowerStore();
const contentStore = useContentStore();
const postStore = usePostStore();
</script>

<template>
  <header-component />
  <main>
    <section class="voltar">
      <span class="mdi mdi-arrow-left"></span>
      <RouterLink to="/home" class="return">Voltar</RouterLink>
    </section>
  </main>

  <section class="card-ifc">
    <div class="card-top">
      <h2>{{ storeUser.usuario.fullname }}</h2> 
    </div>
    <p class="username">@{{ storeUser.usuario.name }}</p>
    <div class="avatar-wrapper">
      <img 
        :src="storeUser.profileImagePreview || storeUser.profile.first_profile_image_url" 
        class="avatar"
        alt="User Avatar"
      />
    </div>

    <div class="stats">
      <div>
        <h3>{{ followerStore.followers.length }}</h3>
        <span>Seguidores</span>
      </div>
      <div>
        <h3>{{ followerStore.following.length }}</h3>
        <span>Seguindo</span>
      </div>
      <div>
        <h3>{{ contentStore.contents.length }}</h3>
        <span>Postagens</span>
      </div>
    </div>

    <button 
      @click="followerStore.follow(storeUser.usuario.id)" class="btn-seguir">Seguir
    </button>
  </section>

  <section class="post">
    <div class="post-content">
      <ul>
        <li v-for="i in postStore.posts">
          <img :src="i.image" alt="">
        </li>
      </ul>
    </div>
  </section>
  <button @click="router.push('/criar-postagem')">ad</button>
</template>

<style scoped>
.voltar {
  margin: 3vw 0 1vw 5vw;
}
.return {
  all: unset;
  cursor: pointer;
  font-size: 1rem;
  color: black;
}

.card-ifc {
  width: 90vw;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  margin: 0.5vw auto 2vw auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: sans-serif;
  position: relative;
}

.username {
  margin: 1vw 34vw 0 0;
  color: grey;
  font-size: 1rem;
}

.card-top {
  background: #0A7C00;
  padding: 80px 20px;
  color: white;
  max-height: 50%;
}

.card-top h2 {
  margin: 0 30.5vw 0 0;
  font-size: 1.6rem;
}

.avatar-wrapper {
  position: absolute;
  top: 65px;
  left: 20%;
  transform: translateX(-50%);
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  background: #eee;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 80px 0 20px 0;
}

.stats div {
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid #ccc;
}

.stats div:last-child {
  border-right: none;
}

.stats h3 {
  margin: 0;
  font-size: 1.3rem;
}

.stats span {
  color: gray;
  font-size: 0.9rem;
}

.btn-seguir {
  background: #0A7C00;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: 0.8s;
}

.btn-seguir:hover {
  background: #195527;
}

.post-content {
  padding: 20px;
}
</style>
