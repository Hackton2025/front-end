<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useUserStore } from '@/stores/user'
import { useUiStore } from '@/stores/refreshPage'

const store = useUserStore()
const uiStore = useUiStore()

const props = defineProps(['visivel'])
const emit = defineEmits(['fechar'])

const isOn = ref(true)
const fileInputRef = ref(null)

const triggerFileSelect = () => {
  fileInputRef.value?.click()
}

onMounted(() => {
  uiStore.ativarAvisoSaida()
})

onBeforeUnmount(() => {
  uiStore.desativarAvisoSaida()
})

const logoutUser = () => {
  store.resetStore(); // Usa a função resetStore para limpar tudo
  store.logout(); // Redireciona para login
};

const saveChanges = async () => {
  try {
    // Atualizar perfil (incluindo imagem)
    await store.updateProfile()

    // Atualizar usuário
    const userUpdates = {
      fullname: store.usuario.fullname,
      name: store.usuario.name,
      email: store.usuario.email
    }
    await store.updateUser(userUpdates)

    // alert('Alterações salvas com sucesso!')
  } catch (error) {
    console.error("Erro ao salvar alterações:", error)
    alert("Ocorreu um erro ao salvar as alterações. Tente novamente.")
  }
}
</script>

<template>
  <div class="config-panel" :class="{ aberto: props.visivel }">
    <div class="fechar">
      <button @click="emit('fechar')"><span class="mdi mdi-close-thick"></span></button>
    </div>

    <div class="conteudo">
      <div class="perfil">
        <img :src="store.profileImagePreview
          || (store.profile.first_profile_image_url
            ? store.profile.first_profile_image_url
            : '/img/default-avatar.png')" class="avatar" @click="triggerFileSelect" />

        <input type="file" ref="fileInputRef" @change="store.onFileChange" accept="image/*" style="display: none;" />

        <div class="user-info">
          <input v-model="store.usuario.fullname" class="fullname" />
          <input v-model="store.usuario.name" class="username" />
          <p class="email">{{ store.usuario.email }}</p>
          <input placeholder="Adicione um link" v-model="store.profile.links1" class="links" />
          <input placeholder="Adicione um link" v-model="store.profile.links2" class="links" />
        </div>
      </div>

      <div class="descricao">
        <textarea name="legend" id="legend" placeholder="Adicione uma legenda"
          v-model="store.profile.legend"></textarea>
      </div>
      <div style="display: flex;">
        <button @click="saveChanges" class="saveChanges">Salvar alterações</button>
      </div>

      <div class="notificacoes">
        <span>🔔 Notificações</span>
        <div class="toggle-box">
          <button :class="['toggle-btn', isOn ? 'ativo' : '']" @click="isOn = true">
            ON
          </button>
          <button :class="['toggle-btn', !isOn ? 'negativo' : '']" @click="isOn = false">
            OFF
          </button>
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

        <button class="danger-button" @click="logoutUser">
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
input {
  border: none;
  background: transparent;
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

.fechar button {
  background-color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
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
  cursor: pointer;
  transition: 0.2s;
}

.avatar:hover {
  opacity: 0.8;
}

.saveChanges {
  background-color: green;
  border: none;
  color: white;
  margin: 0 0 2vw 0;
  width: 35%;
  height: 2.5vw;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
}

.saveChanges:hover {
  background-color: rgb(0, 150, 0);
  transition: 0.5s;
}

.usuario,
.email {
  color: #666;
  font-size: 14px;
}

.descricao {
  margin-top: 20px;
}

.descricao input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
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
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
}

.mdi.mdi-delete {
  color: red;
}

textarea {
  width: 100%;
  height: 20vh;
  border: none;
  border-radius: 4px;
  padding: 8px;
  resize: none;
}

textarea:focus {
  outline: none;
  border: none;
  transition: 0.5s;
}

.h2 {
  font-size: 1.5rem;
}

.links:nth-child(1) {
  margin-top: 10px;
}

.links {
  display: flex;
}

.fullname {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
}

.username {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-top: 2px;
}
</style>