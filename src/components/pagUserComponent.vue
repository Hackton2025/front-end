  <script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const props = defineProps(['visivelPerfil'])
  const emit = defineEmits(['fecharPerfil', 'abrirConfig'])

  import { useUserStore } from '@/stores/user'
  const store = useUserStore()
  </script>

  <template>
    <div class="painel-user" :class="{abrir: props.visivelPerfil}">
      <div class="closed">
        <button @click="emit('fecharPerfil')"><span class="mdi mdi-close-thick"></span></button>
      </div>

      <div class="fundo">
        <img :src="store.profileImagePreview
          || (typeof store.profile.first_profile_image_url === 'string'
            ? store.profile.first_profile_image_url  
            : null)" class="avatar" />

        <div class="card">
          <div class="conteudo">
            <h2>{{ store.usuario.fullname }}</h2>
            <p class="username">@{{ store.usuario.name }}</p>

            <ul>
              <li><span>24</span><br />seguidores</li>
              <li><span>69</span><br />seguindo</li>
            </ul>

            <div class="biografia">
              <p>
                {{ store.profile.legend }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.painel-user {
  position: fixed;
  top: 0;
  right: -70%;
  width: 40%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.painel-user.abrir {
  right: 0;
}

.closed{
  display: flex;
  justify-content: end;
}
.closed button{
  background-color: white;
  border: none;
  font-size: 2rem;
}
.fundo {
  background: linear-gradient(to bottom, #2F9E41 50%, #E1E1E1 50%);
  border-radius: 2vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48vw;
  padding-top: 10%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.411);
}

img {
  position: absolute;
  width: 14vw;
  height: 16vw;
  border-radius: 2vw;
  object-fit: cover;
  top: 4%;
  left: 50%;
  z-index: 2;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.card {
  margin: auto;
  background-color: white;
  text-align: center;
  width: 90%;
  max-width: 200vw;
  overflow: hidden;
  border-radius: 2vw;
  position: relative;
  z-index: 1;

}

.conteudo {
  padding: 8vh 5vw;
}

.card h2 {
  font-weight: bold;
  color: black;
  font-size: 1.8rem;
}

.card p.username {
  color: gray;
}

.card ul {
  display: flex;
  justify-content: center;
  margin: 2vw;
}

.card ul li {
  color: gray;
  margin: auto;
  font-size: 1.3rem;
}

.card ul li span {
  color: black;
  font-weight: bold;
}

.fecharPerfil {
  display: flex;
  justify-content: flex-end;
}

.editar {
  background-color: white;
  border: solid 2px #075200;
  border-radius: 12px;
  font-size: 1rem;
  width: 60%;
  max-width: 100px;
  min-width: 120px;
  color: #075200;
  margin-top: 5%;
  margin-bottom: 5%;
}

.biografia {
  background-color: rgba(211, 211, 211, 0.2);
  border-radius: 12px;
  padding: 20px 5px 20px 5px;
  text-align: center;
}

.biografia p {
  color: black;
  text-align: left;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 900;
}


</style>
