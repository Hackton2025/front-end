<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'

const store = useUserStore()
const router = useRouter()

const visivel = ref(false)
const visivelPerfil = ref(false)
const searchMobile = ref(false) // 👈 controla a aba de pesquisa mobile

// Campo de busca
const searchQuery = ref('')

// Computed: filtra usuários
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  return store.usersFetched
    .filter(user =>
      user.fullname?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 5)
})

// Carrega usuários
store.fetchUsers()

function irParaUsuario(uuid) {
  fecharBusca()
  router.push({ name: 'verUsuario', params: { uuid } })
}

function abrirBusca() {
  searchMobile.value = true
}

function fecharBusca() {
  searchMobile.value = false
  searchQuery.value = ''
}
</script>

<template>
  <!-- ===== TOPO (desktop) ===== -->
  <section class="topo">
    <div class="topo-inner">
      <img src="/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />

      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text" v-model="searchQuery" placeholder="Pesquisar usuários..." />
        </div>
      </div>

      <div class="icons">
        <span class="mdi mdi-bell"></span>

        <img
          :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'"
          class="avatar"
          @click="visivelPerfil = true"
        />

        <span class="mdi mdi-cog" @click="visivel = true"></span>
      </div>
    </div>

    <!-- 🔍 RESULTADOS (desktop) -->
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
      <span class="mdi mdi-magnify" @click="abrirBusca"></span>
    </div>

    <div class="nav-icon">
      <img
        :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'"
        class="avatar"
        @click="visivelPerfil = true"
      />
    </div>

    <div class="nav-icon">
      <span class="mdi mdi-cog" @click="visivel = true"></span>
    </div>
  </section>

  <!-- ⚙️ PAINÉIS -->
  <config-panel-component :visivel="visivel" @fechar="visivel = false" />
  <pag-user-component :visivelPerfil="visivelPerfil" @fecharPerfil="visivelPerfil = false" />

  <!-- 🔲 ABA DE PESQUISA MOBILE -->
  <div v-if="searchMobile" class="overlay" @click.self="fecharBusca">
    <div class="search-box">
      <div class="search-header">
        <input type="text" v-model="searchQuery" placeholder="Pesquisar usuários..." autofocus />
        <span class="mdi mdi-close fechar" @click="fecharBusca"></span>
      </div>

      <div v-if="searchQuery && searchResults.length" class="search-results-mobile">
        <ul>
          <li v-for="user in searchResults" :key="user.uuid" @click="irParaUsuario(user.uuid)">
            {{ user.fullname }}
          </li>
        </ul>
      </div>

      <div v-else-if="searchQuery && !searchResults.length" class="no-results">
        <p>Nenhum usuário encontrado.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ---------- TOPO ---------- */
.topo {
  align-items: center;
  justify-content: space-between;
}
.topo-inner {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1vw 4vw 0 3vw;
  justify-content: space-between;
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
  object-fit: cover;
  border: solid 2px black;
}

/* ---------- RESULTADOS DESKTOP ---------- */
.search-results {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2vw 0;
  width: 100%;
}
.search-results ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.search-results ul li {
  background-color: #888;
  padding: 0.5vw 1vw;
  width: 40%;
  color: #fff;
  cursor: pointer;
  margin: 0 auto 1vw auto;
  border-radius: 10px;
}
.search-results ul li:hover {
  background-color: #333;
  transition: 0.5s;
}

/* ---------- NAV MOBILE ---------- */
.bottom-nav {
  display: none;
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
}
.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-icon span.mdi {
  font-size: 1.8rem;
  color: #2c3e50;
}
.nav-icon img.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

/* ---------- ABA DE PESQUISA MOBILE ---------- */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 3000;
}
.search-box {
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  padding: 20px;
}
.search-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.search-header input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 10px;
}
.fechar {
  font-size: 1.8rem;
  cursor: pointer;
  color: #444;
}
.search-results-mobile ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}
.search-results-mobile li {
  background-color: #2f9e41;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
}
.no-results {
  text-align: center;
  color: #666;
  margin-top: 15px;
}

/* ---------- RESPONSIVO ---------- */
@media (max-width: 768px) {
  .topo {
    display: none;
  }
  .bottom-nav {
    display: flex;
  }
}
</style>
