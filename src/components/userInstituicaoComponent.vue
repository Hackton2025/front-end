<script setup>
import { RouterLink } from 'vue-router';


</script>
<template>
<main>
    <section class="posts">
    <RouterLink :to="{name : 'home'}" class="voltar"><span class="mdi mdi-arrow-left"></span>Voltar</RouterLink>
    <div class="geral">
    <router-link :to="{name : 'criarPostagem'}" class="post"><span class="mdi mdi-plus"></span><p class="postagem">Adicionar Postagem</p></router-link>
    <router-link :to="{name : 'criarComunidade'}" class="comunnity"><span class="mdi mdi-account-multiple"></span><p class="comunidades">Criar Comunidade</p></router-link>
    <router-link :to="{name : ''}" class=""><span class="mdi mdi-account-edit"></span><p class="gerenciar">Gerenciar Perfis</p></router-link>
    <router-link :to="{name : ''}"><span class="mdi mdi-key-variant"></span><p class="controle">Controle de Acesso</p></router-link>
    <router-link :to="{name : ''}"><span class="mdi mdi-alert"></span><p class="massive">   Mensagens Massivas</p></router-link>
    </div>
    </section>
</main>
</template>
<style scoped>
main {
    padding: 0 2vw 2vw 2vw;
}
.geral {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    margin-bottom: 10px;
    flex-direction: column;
    background-color: #FFFF;
    width: 30%;
    border-radius: 5px;
    height: 100vh;
    padding: auto 0;
    margin-top: 5px;
}
.geral ::v-deep a{
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #2F9E41;
    color: white;
    width: 80%;
    border-radius: 5px;
    height: 3.5vw;
    justify-content: center;
    margin: 0 auto;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    text-decoration: none;
    &:nth-child(1) {
        margin-top: 4vw;
    }
    &:nth-child(2) {
        margin: 2vw auto;
    }
    &:nth-child(3){
        margin-bottom: 2vw;
    }
    &:nth-child(4){
        margin-bottom: 6vw;
    }
    &:nth-child(5){
        background-color: red;
    }   
}
.voltar {
  text-decoration: none; 
  color: inherit;         
  display: inline-flex;    
  align-items: center;
  gap: 5px;              
  font-weight: 500;        
  cursor: pointer;
  font-size: 23px;
  margin-top: 2vw;
}
.voltar span {
    font-size: 30px;
}



</style>