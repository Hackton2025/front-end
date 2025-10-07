<script setup>
import { ref, computed, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()
const visivel = ref(false)
const visivelPerfil = ref(false)

// Novo: campo de busca
const searchQuery = ref('')
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []

  return store.usersFetched
    .filter(user =>
      user.fullname?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 3) // 👈 Mostra no máximo 3 resultados
})

// Carrega todos os usuários na primeira vez (poderia ser otimizado no backend futuramente)
store.fetchUsers()

// Alternativa: buscar enquanto digita (ou use debounce)
function fazerBusca() {
  if (!searchQuery.value.trim()) return
  // A filtragem já acontece no computed acima
}


function irParaUsuario(uuid){
  router.push({name:'verUsuario', params: { uuid }})
}
</script>


<template>
  <!-- ===== TOPO (desktop) ===== -->
  <section class="topo">
    <div style="display: flex; width: 100%;   padding: 1vw 4vw 0 3vw; align-items: center;">
    <img src="/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />

    <div class="input-area">
      <div class="input-wrapper">
        <span class="mdi mdi-magnify search-icon" @click="fazerBusca"></span>
        <input type="text" v-model="searchQuery" placeholder="Pesquisar usuários..." @keyup.enter="fazerBusca" />

      </div>
    </div>

    <div class="icons">
      <span class="mdi mdi-bell"></span>

      <img :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'"
        class="avatar" @click="visivelPerfil = true" />


      <!-- ⚙️ abre painel lateral -->
      <span class="mdi mdi-cog" @click="visivel = true"></span>

    </div>
    </div>
    <div v-if="searchQuery && searchResults.length" class="search-results">
  <ul>
    <li v-for="user in searchResults" :key="user.uuid" @click="irParaUsuario(user.uuid)">
      {{ user.fullname }}
    </li>
  </ul>
</div>

<div v-else-if="searchQuery && !searchResults.length" class="search-results">
  <p>Nenhum usuário encontrado.</p>
</div>

  </section>

  <!-- ===== NAV INFERIOR (mobile) ===== -->
  <section class="bottom-nav">
    <div class="nav-icon">
      <RouterLink to="/home">
        <span class="mdi mdi-home"></span>
      </RouterLink>
    </div>

    <div class="nav-icon">
      <RouterLink to="/">
        <span class="mdi mdi-magnify"></span>
      </RouterLink>
    </div>

    <div class="nav-icon">
      <img :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'"
        class="avatar" @click="visivelPerfil = true" />
    </div>

    <!-- ⚙️ no celular abre rota /configurações -->
    <div class="nav-icon">
      <span class="mdi mdi-cog" @click="visivel = true"></span>

    </div>
  </section>
  <config-panel-component :visivel="visivel" @fechar="visivel = false" />
  <pag-user-component :visivelPerfil="visivelPerfil" @fecharPerfil="visivelPerfil = false" />
</template>

<style scoped>
/* ========== TOPO DESKTOP ========== */
.topo {
  
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  width: 13%;
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
  justify-content: center;
  align-items: center;
}

span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  padding: 5px;
}

.avatar {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: solid 2px black;
  margin-top: 3%;
}

.bottom-nav {
  display: none;
  /* desktop default */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  border-top: 1px solid #ccc;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-icon span.mdi {
  font-size: 1.8rem;
  color: #2c3e50;
}

.nav-icon img.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #333;
  object-fit: cover;
}
.search-results{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2vw 0;
    width: 100%;
}
.search-results ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.search-results ul li{
  background-color: #888;
  padding: 0.5vw 1vw;
  width: 40%;
  color: #fff;
  cursor: pointer;
  margin: 0 auto 1vw auto;
  border-radius: 10px;
}
.search-results ul li:hover{
  background-color: #333;
  transition: 0.5s;
}

/* ========== RESPONSIVO MOBILE ========== */
@media (max-width: 768px) {
  .topo {
    display: none;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  .bottom-nav {
    display: flex;
    /* mostra a nav no mobile */
  }

  .logo {
    width: 50%;
  }

  .input-wrapper input {
    font-size: 0.9rem;
    padding: 8px 10px 8px 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .icons {
    gap: 5px;
  }

  .input-area {
    width: 100%;
  }
}
</style>
