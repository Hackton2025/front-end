<script setup>
import { ref } from "vue";

const user = ref({
  handle: "@Criador do mundo",
  verified: true,
  name: "Kaua Martins Barros",
  time: "1 hora atrás",
  avatar: "/img/motomoto.png", 
});

const post = ref({
  image: "/img/motomoto.png", 
});

const likes = ref(0);
const comments = ref(0);
const shares = ref(0);

const toggleSave = ref(false);

function likePost() {}

function commentPost() {}

function sharePost() {}

function toggleSavePost() {
  toggleSave.value = !toggleSave.value;
}
</script>

<template>
  <div class="card">
    <div class="card-top">
      <div class="avatar">
        <img v-if="user.avatar" :src="user.avatar" alt="avatar" style="width:100%;height:100%;border-radius:10px;" />
      </div>
      <div class="user-info">
        <div class="handle">
          <p>
            {{ user.handle }}
            <img v-if="user.verified" src="/img/verifiedIcon.png" alt="verified" />
          </p>
        </div>
        <div class="username">
          <div class="name">{{ user.name }} | {{ user.time }}</div>
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="images">
        <div class="img-placeholder">
          <img v-if="post.image" :src="post.image" alt="post" style="width:100%;height:100%;border-radius:10px;" />
        </div>
      </div>
    </div>

    <div class="card-actions">
      <div class="icons">
        <div class="icon" @click="likePost"><img src="/img/like.png" /></div>
        <div class="icon" @click="commentPost"><img src="/img/comment.png" /></div>
        <div class="icon" @click="sharePost"><img src="/img/share.png" /></div>
      </div>
      <button class="save" @click="toggleSavePost">
        {{ toggleSave ? "Salvo" : "Salvar" }}
      </button>
    </div>
    <div class="card-bottom">
      <div class="comment-avatar"></div>
      <input class="input-placeholder" placeholder="Adicione um comentário..." />
    </div>
  </div>
</template>


<style scoped>
.card {
  border: 1px solid #ff0000;
  border-radius: 10px;
  background: #fff;
  width: 100%;       
  margin: 0 auto 20px auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  height: calc(34vw + 5px);
}

.card-top {
  display: grid;
  align-items: center;
  padding: 15px;
  gap: 10px;
  grid-template-columns: 1fr 20fr;
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid black;
}

.user-info {
  display: grid;
  width: 57%;
  height: 100%;
  grid-template-rows: 1fr 1fr;
  gap: 5px;


}
.username {
  align-items: start;
  margin-top: 4px;
  padding: 0; 
  
  }
.name, .time, .handle {
  height: 10px;
  border-radius: 10px;
}

.name { 
  width: 100%; 
  }
.dot { 
  width: 6px; 
  height: 6px; 
  }


.handle {
  display: flex;
  align-items: center;  
  color: 8E8E8E;
  font-size: 100%;
  width: 100%;
  height: 100%;
  margin-top: 2px;
}

.handle p {
  display: flex;
  align-items: center;
}

.handle img {
  width: 18px;          
  height: 18px;
}


.images {
  display: flex;
  gap: 4px;
  padding: 15px;
}

.img-placeholder {
  flex: 1;
  height: 300px;
  border: 2px solid #bbb;
  border-radius: 10px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 15px;
}

.icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
}

.icon img {
  width: 25px;
  height: 25px;
}

.save {
  width: 15%;
  color: white;
  background-color: #2c9c49;
  height: 2.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease; 
  border: none;
}

.save:hover {
  width: calc(15% + 1px); 
  opacity: 0.9; 
  
}

.card-bottom {
  display: flex;
  align-items: center;
  padding: 14px 12px;
  gap: 10px;
}


.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
}

.input-placeholder {
  flex: 1;
  height: 38px;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 8px;
}
</style>
