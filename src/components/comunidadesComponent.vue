<script setup>
import { useComunittyStore } from '@/stores/comunitty';
const store = useComunittyStore()
</script>

<template>
  <div class="comunidades">
    <h3>Minhas Comunidades:</h3>
    <ul>

      <li v-for="value in store.filteredCommunities" :key="value.uuid">
        <img :src="value.image" alt="Imagem comunidade">
        <p>{{ value.name }}</p>
      </li>


    </ul>
  </div>
</template>

<style scoped>
.comunidades {
  margin: 2vw 0 0 6vw;
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