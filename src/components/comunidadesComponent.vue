<script setup>
import { useComunittyStore } from '@/stores/comunitty';
import { onMounted } from 'vue';
const store = useComunittyStore();
onMounted(() => {
  store.fetchCommunities();
});
</script>

<template>
      <div class="comunidades">
        <h3>Minhas Comunidades:</h3>
        <ul>

          <li v-for="comn in store.filteredCommunities" :key="comn.id">
            <img :src="comn.image || 'https://i.imgur.com/L7rJjpt.png'" alt="Imagem da Comunidade" />
            <p>{{ comn.name }}</p>

          </li>

        </ul>
      </div>
</template>

<style scoped>
.comunidades{
  margin: 2vw 0 0 2vw;
}
h3 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 1.5vw;
}
li {
  display: flex;
  padding: 10px;
}
p {
  display: flex;
  align-items: center;
  margin: 10px;
}
img {
  width: 3vw;
  height: 3vw;
  border-radius: 15%;
  padding: 4.5px;
  background-color: #2F9E41;
 }
</style>