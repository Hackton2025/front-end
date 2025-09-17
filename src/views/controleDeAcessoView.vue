<script setup>
import headerComponent from '@/components/headerComponent.vue';
import { useComunittyStore } from '@/stores/comunitty';
import { useUserStore } from '@/stores/user';

const ComunStore = useComunittyStore();
const UserStore = useUserStore();
</script>

<template>
  <header-component />

  <div class="voltar">
    <span class="mdi mdi-arrow-left"></span>
    <RouterLink to="/home" class="return">Voltar</RouterLink>
  </div>

  <div class="meio-pag">
    <div class="left">
        <div class="titulo">
            <span class="mdi mdi-account-group"></span>
             <h1>Comunidade</h1>
        </div>
      <div class="input-wrapper">
        <input type="text" v-model="ComunStore.search" placeholder="Pesquisar..." />
        <span class="mdi mdi-magnify search-icon"></span>
      </div>

      <!-- Exibir as comunidades filtradas -->
      <ul>
        <li v-for="comn in ComunStore.filteredCommunities" :key="comn.uuid">
            <img :src="comn.image" alt="Imagem da comunidade" />
          <h3>{{ comn.name }}</h3>
        </li>
      </ul>
    </div>

    <div class="right">
      <!-- Seção da direita pode ser usada para outras coisas, se necessário -->
    </div>
  </div>
</template>

<style scoped>
.meio-pag {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.right, .left {
  background-color: white;
  margin: 2vw 3.5vw;
  border-radius: 10px;
  object-fit: cover;
  height: 75vh;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.13);
}
.titulo{
    display: flex;
    align-items: center;
    margin: 20px;
    font-size: 1.7rem;
}
.titulo .mdi.mdi-account-group{
    font-size: 2.3rem;
    margin-right: 10px;
}
ul li{
    display: flex;
    align-items: center;
}
ul li:hover{
    background-color: #f0f0f0;
    cursor: pointer;
    padding: 3px 0;
    transition: 0.4s;
}
ul li h3{
    margin-left: 20px;
    font-size: 1.3rem;
}
ul li img{
    width: 80px;
    height: 80px;
    border-radius: 7px;
    margin-left: 20px;
    margin-top: 7px;
    margin-bottom: 7px;
    border: solid
}
</style>
