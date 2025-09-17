<script setup>
import { ref } from 'vue';

const activities = ref([
  { name: "Videira", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Abelardo Luz", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Blumenau", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Brusque", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Camboriú", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Concórdia", avatar: "/img/logo.png", time: "3 min atrás" },
  { name: "Fraiburgo", avatar: "/img/logo.png", time: "3 min atrás" },
]);

function removeActivity(index) {
  activities.value.splice(index, 1);
}

function followBack(index) {
  alert(`Você começou a seguir ${activities.value[index].name} de volta!`);
}
</script>

<template>
  <div class="activity-feed">
    <h2>Atividade recente</h2>
    <div v-for="(item, index) in activities" :key="index" class="activity-card">
      <div class="activity-info">
        <img :src="item.avatar" alt="avatar" class="avatar" />
        <div class="text">
          <div class="name">{{ item.name }}</div>
          <div class="action-text">Começou a seguir você. {{ item.time }}</div>
        </div>
      </div>
      <div class="activity-actions">
        <button class="remove-btn" @click="removeActivity(index)">Remover</button>
        <button class="follow-btn" @click="followBack(index)">Seguir de volta</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-feed {
  width: 100%;  
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: black;
  border: 1px solid black;
}

h2 {
  font-size: 18px;
  margin-bottom: 12px;
}

.activity-card {
  display: grid;
  border: 1px solid black;
  grid-template-rows: 1fr 1fr;
  height: 100px;
  max-height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  border-radius: 8px;
  padding: 10px 8px;
  margin: 20px 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.activity-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.text {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  font-size: 14px;
}

.action-text {
  font-size: 12px;
  color: #555;
}

.activity-actions {
  display: flex;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid black;
}

.remove-btn {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
}

.follow-btn {
  background-color: #0a8d48;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
}
</style>
