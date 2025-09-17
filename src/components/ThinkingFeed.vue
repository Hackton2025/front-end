<script setup>
import { ref } from 'vue'

// Reatividade do input
const postText = ref('')

// Perfil do usuário
const user = ref({
  name: "Kaua Martins Barros",
  avatar: "/img/motomoto.png" // substitua pelo caminho da imagem real
})
</script>

<template>
  <div class="main">
    <!-- Profile com imagem -->
    <div class="profile">
      <img v-if="user.avatar" :src="user.avatar" alt="Profile" />
    </div>

    <div class="input-wrapper">
      <input 
        type="text" 
        class="input" 
        placeholder="O que você está pensando?"
        v-model="postText"
      >
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 80px;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 12fr; 
  align-items: center; 
  gap: 10px;
  padding: 0 15px; 
  box-sizing: border-box;
}

.profile {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.input-wrapper {
  width: 100%;
  height: 50px;
  background-color: #F0F2F5;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.input {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-size: 14px;
}

.input:focus {
  outline: none;
}
</style>
