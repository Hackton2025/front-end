<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/plugins/axios'

const route = useRoute()
const uuid = route.params.uuid

const user = ref(null)
const isLoading = ref(true)

const getProfileImageUrl = (filePath) => {
  if (!filePath) return '/default-avatar.png'

  // Se for Cloudinary (vem com "image/upload")
  if (filePath.includes('image/upload')) {
    return `https://res.cloudinary.com/<seu-cloud-name>/${filePath}`
  }

  // Se já for URL absoluta
  if (filePath.startsWith('http')) return filePath

  // Se for caminho local (Django)
  return `http://127.0.0.1:8000/${filePath}`
}

onMounted(async () => {
  try {
    const { data } = await api.get(`/users/${uuid}/`)
    user.value = data
  } catch (error) {
    alert('Erro ao carregar informações do usuário.')
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="isLoading">
      Carregando informações do usuário...
    </div>

    <div v-else-if="user" class="profile-card">
      <img 
        :src="getProfileImageUrl(user.profile[0]?.firstProfileImage?.file)" 
        alt="Foto do usuário"
      >
      <h2>{{ user.fullname }}</h2>
    </div>

    <div v-else>
      Usuário não encontrado.
    </div>
  </div>
</template>
