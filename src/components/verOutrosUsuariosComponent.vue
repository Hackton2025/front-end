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
  if (!filePath || filePath === 'null') return '/default-avatar.png';
  return filePath.startsWith('http') ? filePath : `http://127.0.0.1:8000/${filePath}?t=${Date.now()}`;
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
    isLoading.value = true;
    let foundUser = userStore.usersFetched.find(u => u.uuid === newUuid);

    if (!foundUser) {
      foundUser = await userStore.fetchUserByUuid(newUuid);
    }

    console.log('Perfil do usuário:', foundUser.profile); // ✅ veja se o campo existe
    user.value = foundUser;
    isLoading.value = false;
  },
  { immediate: true }
)

</script>

<template>
  <div class="user-profile">
    <div v-if="isLoading">Carregando informações do usuário...</div>

    <div v-else-if="user" class="profile-card">
      <!-- Cabeçalho verde -->
      <div class="profile-header">  
        <img
          class="profile-avatar"
          :src="getProfileImageUrl(user.profile?.first_profile_image_url)"
          alt="Foto do usuário"
        />
        <h2 class="profile-name">{{ user.fullname }}</h2>
      </div>

      <!-- Corpo branco -->
      <div class="profile-body">
        <p class="profile-username">@{{ user.name }}</p>
        <div class="profile-stats">
          <div class="sgds">
            <span>Seguidores</span>
            <br>
            <strong style="margin-right: 1vw;">0</strong>
          </div>
          <div class="sgnd">
            <span>Seguindo</span>
            <br>
            <strong style="margin-right: 1vw;">0</strong>
          </div>
        </div>

        <div class="profile-bio">
          <p>{{ user.profile?.legend || 'Esse usuário ainda não escreveu nada.' }}</p>
        </div>

        <button class="follow-btn" @click="followUser">Seguir</button>
      </div>
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
  border-radius: 0.8vw;
  width: 60vw;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Header verde */
.profile-header {
  background: #0a801f;
  display: flex;
  justify-content: center;
  padding: 4rem 0 4rem 0;
  position: relative;
}
.profile-header img {
  padding: 2vw; 
  margin-right: 35vw;
}
/* Avatar redondo sobreposto */
.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  position: absolute;
  bottom: -60px;
  background: white;
  object-fit: cover;
}

.profile-body {
  background: white;
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;
}

.profile-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  margin-right: 15vw;
  margin-bottom: -4vw;
  margin-top: 3vw ;
}

.profile-username {
  color: gray;
  margin-bottom: 0.5rem;
  margin-right: 20vw;
  margin-top: -4vw;
  margin-bottom: 6vw;
}

.email {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  border-top: 1px;
  border-bottom: 1px;
  padding: 1rem 0;
  margin-top: -5vw;
}

.profile-stats div {
  text-align: center;
}
.sgds{
  margin-left: 20vw;
  margin-bottom: 4vw;
  border-right: 1px solid black;
  padding-top: 10px;
  padding-right: 5vw; 
}
.sgnd{
  margin-right: 10vw;
  padding: 10px;
}
.profile-bio {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
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
