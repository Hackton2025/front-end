<script setup>
import { ref } from 'vue'

const props = defineProps(['visivel'])
const emit = defineEmits(['fechar'])

const isOn = ref(true)
</script>

<template>
  <div class="config-panel" :class="{ aberto: props.visivel }">
    <div class="fechar">
      <button @click="emit('fechar')">❌</button>
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

  <div v-if="props.visivel" class="fundo" @click="emit('fechar')"></div>
</template>


<style scoped>
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
