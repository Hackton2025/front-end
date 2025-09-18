<script setup>
import { usePostStore } from "@/stores/post";

const store = usePostStore();
</script>

<template>
  <main>
    <ul>
      <li v-for="post in store.posts" :key="post.uuid">
        <div class="post">
          <div class="total">
            <div class="author">
              <img v-if="post.author.first_profile_image_url" :src="post.author.first_profile_image_url"
                alt="foto de perfil" />
              <p>{{ post.author.fullname }}</p>
            </div>
            <div class="content">
              <p>{{ post.content }}</p>

              <img v-if="post.image_url" :src="post.image_url" alt="imagem do post" />

              <video v-if="post.video_url" :src="post.video_url" controls></video>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div style="background-color: white; padding: 2vw 3vw; border-radius: 10px; height: fit-content;">
      <h2 style="font-size: 2rem;" class="instituicoes">
        Agora no IFC
      </h2>
      <div class="teste" style="display: flex; align-items: center; margin-top: 2vw;">
        <img style="width: 4vw;" src="/public/img/Logo_IFC_vertical.png" alt="">
        <h2>IFC Campus Araquari</h2>
      </div>
    </div>
  </main>
</template>
<style scoped>
main{
  display: flex;
  justify-content: space-between;
  margin: 1vw 4vw;
}
ul {
  justify-content: center;
}

.post {
  width: 60%;
  min-width: 60%;
}

.total {
  background-color: white;
  margin-bottom: 2vw;
  width: 100%;
  padding: 2vw 3vw;
  border-radius: 10px;
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
  border-radius: 10px;
}

.content p {
  font-size: 1rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  margin: 20px 0;
}
</style>
