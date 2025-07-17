<script setup>
import { ref } from 'vue'

const mostrarConfig = ref(false)
</script>

<template>
  <main>
    <section class="topo">
      <img src="/public/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />
      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text" />
        </div>
        <div class="icons">
          <span class="mdi mdi-home"></span>
          <span class="mdi mdi-circle-outline"></span>
          <span class="mdi mdi-cog" @click="mostrarConfig = true"></span>
        </div>      
      </div>
    </section>
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

        <div class="linha">
          <p>🔔 Notificações</p>
          <label>
            <input type="checkbox" />
          </label>
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
            <span class="mdi mdi-sync">Alterar senha </span>
          </button>
          <button class="danger-button"> 
            <span class="mdi mdi-exit-run">Sair da conta</span>
          </button>
          <button class="danger-button">
            <span class="mdi mdi-delete">Deletar conta</span>
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
.logo {
  width: 16%;
  margin: 0.2vw 20vw 2vw 1vw;
}

.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vh 4vw;
}

.input-area {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
}

.input-wrapper {
  position: relative;
  width: 35%;
  margin-right: 15%;
}

input {
  width: 120%;
  padding: 10px 10px 10px 18px; 
  border: none;
  border-radius: 30px;
  background-color: #2da34a;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 20.6vw;
  transform: translateY(-50%);
  font-size: 20px;
  color: white;
}

span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
}

.icons {
  display: flex;
  margin-left: auto;
}
.input-wrapper span {
  color: white;
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
.usuario, .email {
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
.linha {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
}
.acoes {
  border: 1px solid #ff4d4d; 
  padding: 16px;
  border-radius: 10px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}
.acoes button {
  padding: 16px;
  border: none;
  cursor: pointer;
  text-align: left;
  border-radius: 5px;
  color: red;
  
}
.acoes button.perigo {
  font-weight: bold;
}
.danger-button {
  font-size: 14px;         
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

</style>
