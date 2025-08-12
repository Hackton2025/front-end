faça o card nesse estilo e me mande o codigo inteiro:

<script setup>
import { ref } from 'vue'

const mostrarConfig = ref(false)
const isOn = ref(false)
</script>

<template>
  <main>
    <section class="topo">
      <img src="/public/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />
      
      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </div>

      <div class="icons">
        <span class="mdi mdi-bell"></span>
        <span class="mdi mdi-circle-outline"></span>
        <span class="mdi mdi-cog" @click="mostrarConfig = true"></span>
      </div>
    </section>

    <section class="lula">
      <div class="instituicao">
        
        <ul>
        <div class="cima">
       
          <li>
            <img src="/public/img/Logo_IFC_vertical_araquari.png" alt="Logo IFC">
          </li>
           </div>
          <div class="baixo">
          <h3>Araquari</h3>
          <p>@araquari</p>
          <h3>Instituto Federal Catarinense Campus Araquari</h3>
          </div>
        </ul>
        
      </div>

      <div class="comunidades">
        <h3>Minhas Comunidades:</h3>
        <ul>
          <li>
            <img src="/public/img/Logo_IFC_vertical_araquari.png" alt="D-geral"> 
            <p>Direção-Geral</p>
          </li>
          <li>
            <img src="" alt=""> CECOM
          </li>
          <li>
            <img src="" alt=""> Agropecuária
          </li>
          <li>
            <img src="" alt=""> Informática
          </li>
          <li>
            <img src="" alt=""> Química
          </li>
          <li>
            <img src="" alt=""> NUPE
          </li>
        </ul>
      </div>
    </section>

    <!-- Painel de Configurações -->
    <div class="config-panel" :class="{ aberto: mostrarConfig }">
      <div class="fechar">
        <button @click="mostrarConfig = false">❌</button>
      </div>

      <div class="conteudo">
        <div class="perfil">
          <img src="https://i.imgur.com/L7rJjpt.png" class="avatar" />
          <div>
            <h2>user_name</h2>
            <p class="usuario">user.usuario</p>
            <p class="email">email@gmail.com</p>
          </div>
        </div>

        <div class="descricao">
          <p><strong>Descrição:</strong></p>
          <ul>
            <li>Suricato</li>
            <li>Amigo do Maia</li>
            <li>Flamengo no coração ❤️🖤</li>
            <li>Joinville - 17y</li>
          </ul>
        </div>

        <div class="notificacoes">
          <span>🔔 Notificações</span>
          <div class="toggle-box">
            <button :class="['toggle-btn', isOn ? 'ativo' : '']" @click="isOn = true">ON</button>
            <button :class="['toggle-btn', !isOn ? 'negativo' : '']" @click="isOn = false">OFF</button>
          </div>
        </div>

        <div class="privacidade">
          <label for="privacidade">🔒 Privacidade</label>
          <select id="privacidade">
            <option>Público</option>
            <option>Privado</option>
          </select>
        </div>

        <div class="acoes">
          <button class="danger-button">
            <span class="mdi mdi-sync"></span>
            <span>Alterar senha</span>
          </button>

          <button class="danger-button">
            <span class="mdi mdi-exit-run"></span>
            <span>Sair da conta</span>
          </button>

          <button class="danger-button">
            <span class="mdi mdi-delete"></span>
            <span>Deletar conta</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mostrarConfig" class="fundo" @click="mostrarConfig = false"></div>
  </main>
</template>

<style scoped>
main {
  background-color: #E1E1E1;
}

.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vh 4vw;
  gap: 20px;
}

.logo {
  width: 16%;
}

.input-area {
  flex: 1;
  display: flex;
  justify-content: center;
}

.input-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
}

input {
  width: 100%;
  padding: 10px 15px 10px 35px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  pointer-events: none;
}

.icons {
  display: flex;
  gap: 10px;
}

span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  padding: 5px;
}


.instituicao {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: 2vw 3vw 2vw 3vw;
  text-align: center;
}

.instituicao .cima {
  background-color: green;
}
.instituicao img {
  width: 80px;
  height: auto;
  margin: 10px 0;
}

.instituicao ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.instituicao li {
  margin-bottom: 8px;
}

.instituicao h3 {
  margin: 8px 0;
  color: #2c3e50;
}

.instituicao p {
  margin: 4px 0;
  color: #666;
  font-size: 0.9rem;
}

.lula .comunidades img {
  width: 9%;
  border-radius: 20px;
}

.lula .comunidades ul li {
  display: flex;
}

.config-panel {
  position: fixed;
  top: 0;
  right: -70%;
  width: 40%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.config-panel.aberto {
  right: 0;
}

.fundo {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 900;
}

.fechar {
  display: flex;
  justify-content: flex-end;
}

.perfil {
  display: flex;
  gap: 15px;
  align-items: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.usuario,
.email {
  color: #666;
  font-size: 14px;
}

.descricao {
  margin-top: 20px;
}

.descricao ul {
  margin: 5px 0 0 15px;
  padding: 0;
}

.notificacoes {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.toggle-box {
  display: flex;
  border: 1px solid #333;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 22px;
}

.toggle-btn {
  padding: 5px 15px;
  border: none;
  background-color: white;
  color: #333;
  cursor: pointer;
  font-weight: bold;
}

.toggle-btn.ativo {
  background-color: green;
  color: white;
  transition: 0.3s;
}

.toggle-btn.negativo {
  background-color: red;
  color: white;
  transition: 0.3s;
}

.privacidade {
  margin-top: 20px;
}

.privacidade select {
  width: 20%;
  padding: 5px;
  border-radius: 4px;
  margin-left: 23.7vw;
  padding-left: 10px;
  background-color: #eaeaea;
  color: black;
}

.acoes {
  border: 1px solid #d34141;
  padding: 16px;
  border-radius: 10px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.acoes button {
  padding: 1px;
  border: none;
  cursor: pointer;
  text-align: left;
  border-radius: 5px;
  color: black;
}

.danger-button {
  padding: 6px 12px;
  margin: 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #eaeaea;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.mdi.mdi-delete {
  color: red;
}
</style>

