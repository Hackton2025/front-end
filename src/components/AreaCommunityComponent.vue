<script setup>
import { useComunittyStore } from '@/stores/comunitty'; 
import { useSeguidoresStore } from '@/stores/seguidores';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useComunittyStore();
const seguidoresStore = useSeguidoresStore();
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
            <p>0</p>
          </div>
        </div>

        <div class="descricao">
          <p>{{ store.currentCommunity.legend }}</p>
        </div>

<button @click="seguidoresStore.toggleSeguidor(store.currentCommunity.uuid)" :class="{'seguindo': seguidoresStore.clicadoComunidade[store.currentCommunity.uuid]}">
  {{ seguidoresStore.clicadoComunidade[store.currentCommunity.uuid] ? 'Seguindo' : 'Entrar na comunidade' }} 
</button>



      </div>
    </section>
  </main>
  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<style scoped>
section{
    margin-right: 6vw;
}

.corDiferente{
    background-color: #0A7C00;
    padding: 6vw 0 0.5vw 7vw;
    color: white;
    font-size: 1.7rem;
    border-radius: 1vw 1vw 0 0;
    position: relative;
}
.corDiferente h1{
    margin-left: 3.8vw;
    font-weight: 600;
}
.lado h2{
    position: absolute;
    margin: -5.8vw 0 0 10.8vw;
    font-size: 0.9rem;
    color: #00000085;
}
img{
    position: absolute;
    border-radius: 50%;
    width: 9vw;
    height: 9vw;
    object-fit: cover;
    top: -5vw;
    right: 58.9vw;
}
.conteudo{
    background-color: white;
    border-radius: 0 0 1vw 1vw;
    padding: 6vw 0 2vw 0;
    position: relative;
}
.descricao{
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
.informacoes{
    display: flex;
    justify-content: right;
    text-align: center;
    margin-top: 1vw;
}
.informacoes div{
    margin: -4vw 1vw 2vw 4vw;
    border-right: 1px solid black;
    padding-right: 6.5vw;
}
.informacoes div:last-child{
    border-right: none;
}
.informacoes p{
    margin-top: 0.3vw;
}
button{
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
button:hover{
    background-color:  #086600f5;
    cursor: pointer;
    transform: scale(1.01);
}
button.seguindo {
    background-color: #969696;
    padding: 5px 70px;
    border: solid 1px #7a7a7a;
}
</style>
