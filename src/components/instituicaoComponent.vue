<script setup>
// import { RouterLink } from 'vue-router'
  import router from '@/router';
  import { useUserStore } from '@/stores/user';
  const store = useUserStore();
</script>



  <template>
    <section class="card-ifc">
      <div class="card-top"></div>
      <div class="card-content">
        <img :src="store.profile.first_profile_image_url
          || (store.profile.first_profile_image_url
            ? store.profile.first_profile_image_url
            : '/img/default-avatar.png')" class="card-logo" @click="triggerFileSelect" />

        <h3 class="campus">{{ store.usuario.fullname }}</h3>
        <p class="arroba">@{{ store.usuario.name }}</p>
        <p class="descricao">{{ store.profile.legend }}</p>

         <!-- <RouterLink to="/instituicao"> -->
        <button class="btn-ver">Ver perfil</button>
        <button v-if="store.usuario.is_institute" @click="router.push('/instituicao')" class="btn-ver">
          Pagina de admin
        </button>
      </div>
    </section>
  </template>

<style scoped>
.card-ifc {
  width: 280px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin: 0.5vw 3vw 2vw 6vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: sans-serif;
}

.card-top {
  background: linear-gradient(#2c9c49, #2c9c49);
  height: 70px;
}

.card-logo {
  width: 30%;
  height: 10vh;
  margin-top: -35px;
  border: 3px solid black;
  border-radius: 8px;
  background: white;
}

.campus {
  margin: 6px 0 0;
}

.arroba {
  font-size: 12px;
  color: gray;
  margin: 0;
  padding: 10px;
}

.descricao {
  font-size: 13px;
  margin: 4px 0 12px;
  color: #333;
  padding: 6px;
}

.btn-ver {
  background: #2c9c49;
  color: white;
  border: none;
  padding: 8px 0px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 80%;
}

.btn-ver:hover {
  background: #267e3b;
}
</style>
