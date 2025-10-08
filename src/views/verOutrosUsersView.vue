<script setup>
import { defineProps, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import headerComponent from '@/components/headerComponent.vue'
const store = useUserStore()

const props = defineProps({
  uuid: {
    type: String,
    required: true,
  },
})

onMounted(async () => {
  await store.getUserDetail(props.uuid)
})

const cloudinaryBase = 'https://res.cloudinary.com/dm2odcrnf/'
</script>

<template>
  <headerComponent></headerComponent>
  <div class="outer-container">
    <div class="profile-container">
      <!-- Banner verde superior -->
      <div class="header-banner">
        <div class="avatar-wrapper">
          <img 
            :src="store.currentUser.profile?.[0]?.firstProfileImage?.file
              ? cloudinaryBase + store.currentUser.profile[0].firstProfileImage.file
              : '/img/default-avatar.png'" 
            alt="Avatar" 
            class="avatar" 
          />
        </div>
      </div>

      <div class="user-info">
        <h2 class="fullname">{{ store.currentUser.fullname }}</h2>
        <p class="username">@{{ store.currentUser.name }}</p>
        <div class="links">
          <p class="link" v-if="store.currentUser.profile?.[0]?.links1">
            {{ store.currentUser.profile[0].links1 }}
          </p>
          <p class="link" v-if="store.currentUser.profile?.[0]?.links2">
            {{ store.currentUser.profile[0].links2 }}
          </p>
        </div>
        <div class="bio-box" v-if="store.currentUser.profile?.[0]?.legend">
          <p class="bio">
            {{ store.currentUser.profile[0].legend }}
          </p>
        </div>
        <RouterLink to="/home" class="voltar">Voltar</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: none;
}

.profile-container {
  font-family: 'Arial', sans-serif;
  max-width: 450px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
}

.header-banner {
  background-color: #107c10;
  height: 100px;
  position: relative;
}

.avatar-wrapper {
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 15vh;
  height: auto;
  border: 2px solid black;
  overflow: hidden;
  background-color: white;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  padding: 60px 20px 20px;
  text-align: center;
}

.fullname {
  font-size: 1.4rem;
  margin: 0;
  color: #222;
}

.username {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.follow-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
}

.follow-count {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
}

.follow-label {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: #ccc;
}

.bio-box {
  background-color: #ebebeb;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: left;
  font-size: 0.95rem;
  color: #333;
  text-align: center;
}

.follow-btn {
  background-color: #107c10;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.follow-btn:hover {
  background-color: #0d660d;
}

.voltar {
  display: block;
  width: fit-content;
  margin: 0 auto;
  background-color: #107c10;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.voltar:hover {
  background-color: #0d660d;
}

.links {
  margin-bottom: 20px;
  font-size: 0.7rem;
}

.links .link {
  color: #333;
}

/* Responsivo para mobile */
@media (max-width: 480px) {
  .profile-container {
    max-width: 95%;
  }

  .follow-info {
    flex-direction: column;
    gap: 10px;
  }

  .divider {
    display: none;
  }
}
</style>
