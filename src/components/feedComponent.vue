<script setup>
import { usePostStore } from "@/stores/post";

const store = usePostStore();
</script>

<template>
  <ul>
    <li v-for="post in store.posts" :key="post.uuid">
      <div class="post">
        <div class="author">
          <img
            v-if="post.author.first_profile_image_url"
            :src="post.author.first_profile_image_url"
            alt="foto de perfil"
          />
          <p>{{ post.author.fullname }}</p>
        </div>
        <div class="content">
          <p>{{ post.content }}</p>

          <img
            v-if="post.image_url"
            :src="post.image_url"
            alt="imagem do post"
          />

          <video v-if="post.video_url" :src="post.video_url" controls></video>
        </div>
      </div>
    </li>
  </ul>
</template>
<style scoped>
.post {
  width: 60%;
}
.author {
  display: flex;
  justify-content: left;
  align-items: center;
}
.author img {
  max-width: 10%;
  min-width: 10%;
  min-height: 8vh;
  max-height: 8vh;
  border-radius: 100%;
}
.author p {
  font-size: 1.5rem;
  margin-left: 1vw;
}

.content img {
  width: 100%;
  height: 50vh;
}

.content p {
  font-size: 1rem;
  white-space: pre-wrap; /* respeita quebras de linha manuais */
  word-wrap: break-word; /* força quebra de palavras grandes */
  overflow-wrap: anywhere; /* quebra em qualquer lugar se necessário */
}
</style>
