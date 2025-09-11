<script setup>
import headerComponent from './headerComponent.vue';
import { useUserStore } from '@/stores/user';
import { useFollowerStore } from '@/stores/follower';
import { useContentStore } from '@/stores/content';

const storeUser = useUserStore();
const followerStore = useFollowerStore();
const contentStore = useContentStore();


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
      <div class="card-top"></div>
      <div class="card-content">
        <img :src="storeUser.profile.first_profile_image_url" alt="">
        <h2>{{ storeUser.usuario.fullname }}</h2>
        <h3> {{ storeUser.usuario.name }}</h3>
        <ul>
          <li> <h3> Seguidores {{ followerStore.followers.length }}</h3></li>|
          <li> <h3>Seguindo {{ followerStore.following.length }}</h3></li>|
          <li> <h3> Postagens {{ contentStore.contents.length  }}</h3></li>
        </ul>
      </div>
      <button @click="followerStore.follow(storeUser.usuario.id)" class="btn-seguir">Seguir</button>
    </section>
</template>

<style scoped>
main {
    padding: 1% 4vw;
    display: flex;
    justify-content: space-between;
}

.voltar {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #3A3A3A;
    cursor: pointer;
}

.voltar .return {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
}

.voltar .mdi {
    font-size: 2rem;
}

.voltar:hover {
    color: #00000085;
}

.voltar:hover .return {
    text-decoration: underline;
    color: #00000085;
}
.card-ifc {
  width: 90vw;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin: 0.5vw 3vw 2vw 6vw;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  font-family: sans-serif;
}
.card-top {
  background: linear-gradient(#0A7C00, #0A7C00);
  height: 70px;
}
.card-content ul {
  display: flex;
  justify-content: center;
  margin: 2vw;
} 
.card-content ul li {
  padding: 2vw;
}

.btn-seguir {
  background: #0A7C00;
  color: white;
  border: none;
  margin: 1vw;
  padding: 8px 100px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
}
.btn-seguir:hover {
  background: #267e3b;
}
</style>