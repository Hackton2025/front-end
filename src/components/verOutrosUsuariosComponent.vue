<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import api from '@/plugins/axios'

const userStore = useUserStore()
const route = useRoute()

const user = ref(null)
const isLoading = ref(true)

const getProfileImageUrl = (filePath) => {
  if (!filePath) return '/default-avatar.png'
  if (filePath.includes('image/upload')) {
    return `https://res.cloudinary.com/<seu-cloud-name>/${filePath}`
  }
  if (filePath.startsWith('http')) return filePath
  return `http://127.0.0.1:8000/${filePath}`
}

const followUser = async () => {
  try {
    await api.post(`/users/${route.params.uuid}/follow/`)
    alert('Agora você está seguindo esse usuário!')

    const updatedUser = await userStore.fetchUserByUuid(route.params.uuid)
    user.value = updatedUser
  } catch (err) {
    alert('Erro ao seguir usuário.')
  }
}

watch(
  () => route.params.uuid,
  async (newUuid) => {
    isLoading.value = true

    let foundUser = userStore.usersFetched.find(u => u.uuid === newUuid)
    if (!foundUser) {
      foundUser = await userStore.fetchUserByUuid(newUuid)
    }

    user.value = foundUser
    isLoading.value = false
  },
  { immediate: true }
)
</script>

<template>
  <div class="user-profile">
    <div v-if="isLoading">Carregando informações do usuário...</div>

    <div v-else-if="user" class="profile-card">
      <div class="profile-header">
        <img class="profile-avatar" :src="getProfileImageUrl(user.profile?.first_profile_image_url)" alt="Foto do usuário" />
        <div>
          <h2>{{ user.fullname }}</h2>
          <p class="username">@{{ user.fullname}}</p>
          <p class="email">{{ user.email }}</p>
        </div>
      </div>

      <div class="profile-stats">
        <div><strong>{{ user.followers_count || 0 }}</strong><span>Seguidores</span></div>
        <div><strong>{{ user.following_count || 0 }}</strong><span>Seguindo</span></div>
      </div>

      <div class="profile-bio">
        <p>{{ user.profile?.legend || 'Esse usuário ainda não escreveu nada.' }}</p>
      </div>

      <button class="follow-btn" @click="followUser">Seguir</button>
    </div>

    <div v-else>Usuário não encontrado.</div>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.profile-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.username {
  color: gray;
  font-size: 0.9rem;
}
.email {
  color: #555;
  font-size: 0.85rem;
}
.profile-stats {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
}
.profile-stats div {
  text-align: center;
}
.profile-bio {
  margin: 1rem 0;
  font-size: 0.95rem;
}
.follow-btn {
  background: #0a801f;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
}
.follow-btn:hover {
  background: #066817;
}
</style>
