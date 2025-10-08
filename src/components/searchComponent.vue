<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

// Campo de busca
const searchQuery = ref('')

// Computed: filtra usuários com base no que foi digitado
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []

  return store.usersFetched
    .filter(user =>
      user.fullname?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 3) // Limita a 3 resultados
})

// Carrega os usuários (poderia ser otimizado no backend)
store.fetchUsers()

// Navega para o perfil do usuário ao clicar no nome
function irParaUsuario(uuid) {
  router.push({ name: 'verUsuario', params: { uuid } })
}
</script>

<template>
    
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
</template>
<style scoped>
.search-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2vw 0;
  width: 100%;
}

.search-results ul {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0 auto;
  list-style: none;
}

.search-results ul li {
  background-color: #888;
  padding: 0.8rem 1rem;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;
  text-align: center;
}

.search-results ul li:hover {
  background-color: #333;
}

.search-results p {
  font-size: 1rem;
  color: #555;
  margin-top: 1rem;
}
</style>
