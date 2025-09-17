<script setup>
import { useComunittyStore } from '@/stores/comunitty.js'; 
import { onMounted } from 'vue';

const store = useComunittyStore();

onMounted(() => {
  store.fetchCommunities();
});
</script>

<template>
  <h1>Comunidades:</h1>
  <div v-for="community in store.filteredCommunities" :key="community.id" class="community-item">
    <router-link :to="{ name: 'comunidade', params: { uuid: community.uuid } }"> 
      <div class="community-card">
        <img :src="community.image" alt="Image of community" />
        <div class="community-info">
          <h2>{{ community.name }}</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>+

<style scoped>
h1 {
  margin: 3vw 0 0 6vw;
  color: #333;
  font-size: 1.8rem;
  font-weight: 700;
}
.community-item {
  margin: 1vw 3vw 0 6vw;
  padding: 0.5vw;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.267);
}
.community-item:hover {
  background-color: #e6f2e6;
  transition: 1s;
} 
.community-card {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.community-card img {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-right: 1rem;
  border: 3px solid #0A7C00;
}

.community-info h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
}

.community-info p {
  margin: 0.5rem 0 0;
  color: #777;
}

.community-info {
  flex-grow: 1;
}
</style>
