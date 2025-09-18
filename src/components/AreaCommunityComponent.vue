<script setup>
import { useComunittyStore } from '@/stores/comunitty';
import { useSeguidoresStore } from '@/stores/seguidores';
import { usePostStore } from '@/stores/post'
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const store = useComunittyStore();
const seguidoresStore = useSeguidoresStore();
const postStore = usePostStore();
const route = useRoute();

onMounted(async () => {
  const communityUuid = route.params.uuid;
  await store.fetchCommunityDetails(communityUuid);
});

watch(
  () => route.params.uuid,
  (newUuid) => {
    store.fetchCommunityDetails(newUuid);
  },
  { immediate: true }
);
</script>

<template>
  <main v-if="store.currentCommunity">
          <RouterLink :to="{ name: 'home' }" class="voltar">
            <div class="voltar">
            <span class="mdi mdi-arrow-left"></span>
            <h2>Voltar</h2>
            </div>
      </RouterLink>
    <section>
      <div class="corDiferente">
        <h1>{{ store.currentCommunity.name }}</h1>
      </div>
      <div class="conteudo">
        <div class="lado">
          <img :src="store.currentCommunity.image" alt="Image of community" />
          <h2>@{{ store.currentCommunity.name }}</h2>
        </div>

        <div class="informacoes">
          <div class="seguidores">
            <p>Seguidores</p>
            <p>{{ seguidoresStore.seguidoresComunidade[store.currentCommunity.uuid] || 0 }}</p>
          </div>

          <div class="seguindo">
            <p>Seguindo</p>
            <p> {{ seguidoresStore.seguidoresUsuario }}</p>
          </div>

          <div class="publicacoes">
            <p>Publicações</p>
            <p>1</p>
          </div>
        </div>

        <div class="descricao">
          <p>{{ store.currentCommunity.legend }}</p>
        </div>

        <button @click="seguidoresStore.toggleSeguidor(store.currentCommunity.uuid)"
          :class="{ 'seguindo': seguidoresStore.clicadoComunidade[store.currentCommunity.uuid] }">
          {{ seguidoresStore.clicadoComunidade[store.currentCommunity.uuid] ? 'Seguindo' : 'Entrar na comunidade' }}
        </button>

      </div>


      <div class="post">
        <div class="usuario">
          <div class="name">
            <img :src="store.currentCommunity.image" alt="Image of community" />
          </div>
          <div class="name">
            <h1>{{ store.currentCommunity.name }}</h1>
            <h2>@{{ store.currentCommunity.name }}</h2>
          </div>
        </div>

        <div class="legenda">
          <h1>🎉 Olá! Seja bem-vindo(a) à {{ store.currentCommunity.name }}! 🎉</h1>
          <p>Acabamos de criar este espaço especialmente para você e todos os interessados em <span>tecnologia e inovação</span>. Aqui você pode compartilhar ideias, trocar experiências e se conectar com pessoas que gostam do
            mesmo que você. 
          <br>
            Estamos muito felizes em te ter por aqui — sinta-se à vontade e vamos fazer desta comunidade um lugar
            incrível juntos! 🚀💚
            </p>
        </div>
        <div class="image">
          <img src="/img/foto-aérea-1.png" alt="foto">
        </div>

      </div>

    </section>
  </main>
  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<style scoped>
section {
  margin-right: 6vw;
}
 .voltar{
  display: flex;
  align-items: center;
  color: #3A3A3A;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: none;
  margin-bottom: 1vw;
  margin-top: 0.4vw;
}
.corDiferente {
  background-color: #0A7C00;
  padding: 6vw 0 0.5vw 7vw;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 1vw 1vw 0 0;
  position: relative;
}

.corDiferente h1 {
  margin-left: 3.8vw;
  font-weight: 600;
}

.lado h2 {
  position: absolute;
  margin: -5.8vw 0 0 10.8vw;
  font-size: 0.9rem;
  color: #00000085;
}

.lado img {
  position: absolute;
  border-radius: 50%;
  width: 9vw;
  height: 9vw;
  object-fit: cover;
  top: -5vw;
  right: 57.9vw;
}

.conteudo {
  background-color: white;
  border-radius: 0 0 1vw 1vw;
  padding: 6vw 0 2vw 0;
  position: relative;
}

.descricao {
  background-color: #d3d3d388;
  margin: 1vw 2vw 2vw 2vw;
  font-size: 1.05rem;
  padding: 2vw;
  border-radius: 10px;
  text-align: justify;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  line-height: 130%;
  justify-content: space-around;
}

.informacoes {
  display: flex;
  justify-content: right;
  text-align: center;
  margin-top: 1vw;
}

.informacoes div {
  margin: -4vw 1vw 2vw 4vw;
  border-right: 1px solid black;
  padding-right: 6.5vw;
}

.informacoes div:last-child {
  border-right: none;
}

.informacoes p {
  margin-top: 0.3vw;
}

button {
  display: block;
  margin: 0 auto;
  background-color: #0A7C00;
  border: none;
  font-size: 1.02rem;
  color: white;
  padding: 6px 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease
}

button:hover {
  background-color: #086600f5;
  cursor: pointer;
  transform: scale(1.01);
}

button.seguindo {
  background-color: #969696;
  padding: 5px 70px;
  border: solid 1px #7a7a7a;
}

.post {
  background-color: #ffffff;
  margin-bottom: 3vw;
  margin-top: 3vw;
  border-radius: 15px;

}

.post .usuario {
  display: flex;
  align-items: center;
  padding: 1vw;
}

.post .usuario .name img {
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1vw;
}

.post .usuario .name h1 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.post .usuario .name h2 {
  font-size: 0.9rem;
  color: #00000085;
  margin-top: 10px;
}

.post .image img {
  margin: 2vw;
  width: 131vh;
  height: 60vh;
  border-radius: 15px;
  object-fit: cover;
}
.post .legenda {
  padding: 0 2vw 0 2vw;
  text-align: justify;
  line-height: 130%;
}
.post .legenda h1{
  font-size: 1.2rem;
  margin-bottom: 1vw;

  font-weight: 600;
}
.post .legenda p{
  font-size: 1.2rem;
  line-height: 120%;
}
.post .legenda span{
  font-weight: 600;
}
</style>
