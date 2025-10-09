<script setup>

import { useComunittyStore } from '@/stores/comunitty';
import { onMounted } from 'vue';
const store = useComunittyStore();


onMounted(() => {
  store.fetchCommunities();
});
</script>

<template>
  <main>
    
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
  </main>
</template>

<style scoped>
main{
  width: 100%;
}
h1 {
  margin: 0 0 0 6vw;
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


@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-left: 0;
  }

  .community-list {
    justify-content: center;
    margin-left: 0;
    margin-right: 0;

  }
  .community-item { 
    max-width: 90%;
    margin-top: 10px;
  }
  .community-item:last-child{
    margin-bottom: 70px;
  }
  .community-card img {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }

  .community-info h2 {
    font-size: 1rem;
  }
}
</style>