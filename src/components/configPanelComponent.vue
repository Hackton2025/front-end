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
  if (store.token) {
    store.fetchProfile()
  }
  uiStore.ativarAvisoSaida()
})

onBeforeUnmount(() => {
  uiStore.desativarAvisoSaida()
})


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

    alert('Alterações salvas com sucesso!')
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
          || (typeof store.profile.first_profile_image_url === 'string'
            ? store.profile.first_profile_image_url  
            : null)" class="avatar" @click="triggerFileSelect" />


        <input type="file" ref="fileInputRef" @change="store.onFileChange" accept="image/*" style="display: none;" />

        <div>
          <input v-model="store.usuario.fullname" class="h2" />
          <input v-model="store.usuario.name" class="usuario" />
          <p class="email">{{ store.usuario.email }}</p>
          <input placeholder="Adicione um link" v-model="store.profile.links1" class="links"
            style="margin-top: 10px;" />
          <input placeholder="Adicione um link" v-model="store.profile.links2" class="links" />
        </div>
      </div>

      <div class="descricao">
        <textarea name="legend" id="legend" placeholder="Adicione uma legenda"
          v-model="store.profile.legend"></textarea>
      </div>

      <button @click="saveChanges">Salvar alterações</button>
      

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
.fechar button{
  background-color: white;
  border: none;
  font-size: 2rem;
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
  background-color: #eaeaea;
  border: none;
  border-radius: 6px;
  cursor: pointer;
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
.fullname {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
}

.username {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-top: 2px; /* distância do nome completo */
}

</style>
