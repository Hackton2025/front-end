<script setup>
import headerComponent from "./headerComponent.vue";
</script>
<template>
  <headerComponent></headerComponent>
  <main>
    <section class="posts">
      <RouterLink :to="{ name: 'home' }" class="voltar"
        ><span class="mdi mdi-arrow-left"></span>
        <h2>Voltar</h2>
      </RouterLink>
      <div class="geral">
        <div class="botoes">
          <button>
            <span class="mdi mdi-plus"></span>
            <p class="postagem">Adicionar Postagem</p>
          </button>
          <button class="criarC"><span class="mdi mdi-account-multiple"></span><p class="comunidade">Criar Comunidade</p></button>
          <button class="gerenciar">
            <span class="mdi mdi-account-edit"></span>
            <p class="gerenciar">Criar Comunidade</p></button>
          <RouterLink to="/controle-acesso" class="button-link acess">
            <span class="mdi mdi-key-variant"></span>
            <p class="controle">Controle de Acesso</p>
          </RouterLink>
          <button class="massivas">
            <span class="mdi mdi-alert"></span>
            <p class="massivas">Mensagens Massivas</p>
          </button>
        </div>
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
}
.geral div button, .button-link.acess{
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
</style>