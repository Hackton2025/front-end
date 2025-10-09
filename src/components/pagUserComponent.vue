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
  width: 16vw;
  height: 16vw;
  border-radius: 100%;
  object-fit: cover;
  top: 2%;
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
  padding: 20px 5px;
  text-align: center;
  width: 100%;
}

.biografia p {
  padding: 10px 15px;
  color: black;
  text-align: left;
  font-size: 1.2rem;
  word-wrap: break-word; /* Garante que o texto será quebrado quando ultrapassar o limite */
  overflow-wrap: break-word; /* Garante a quebra do texto longo em uma linha */
  max-width: 100%; /* Garante que o texto vai ocupar a largura disponível */
  white-space: normal; /* Garante que o texto pode quebrar em várias linhas */
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 900;
}

/* ===== RESPONSIVO - MOBILE ===== */
@media (max-width: 768px) {
  .painel-user {
    width: 90%;
    right: -100%;
    top: 5%;
    height: 85%;
    padding: 15px;
    border-radius: 12px;
    overflow-y: auto;

  }

  .painel-user.abrir {
    right: 5%;
  }

  .fundo {
    min-height: 90%;
    padding-top: 20%;
    border-radius: 8vw;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    flex-direction: column;
  }

  img {
    width: 40vw;
    height: 40vw;
    object-fit: cover;
    top : 7.5%;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  }

  .card {
    width: 90%;
    border-radius: 5vw;
    margin-top: 20vw;
    margin-bottom: 20px; /* cria espaço para avatar */
  }

  .conteudo {
    padding: 6vh 4vw;
  }

  .card h2 {
    font-size: 1.5rem;
  }

  .card p.username {
    margin-top: 5px;
    font-size: 1rem;
  }

  .card ul li {
    font-size: 1rem;
    margin: 10px 20px;
  }

  .biografia {
    padding: 15px 10px;
    height: auto;
  }

  .biografia p {
    font-size: 1rem;
    padding: 8px 10px;
  }

  .editar {
    width: 70%;
    min-width: unset;
    max-width: unset;
    font-size: 0.9rem;
  }
}

</style>
