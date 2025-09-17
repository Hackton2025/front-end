<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const store = useUserStore();
const route = useRoute();

onMounted(async () => {
  const Uuid = route.params.uuid;
  await store.fetchCommunityDetails(Uuid);
});

watch(
  () => route.params.uuid,
  async (newUuid) => {
    await store.fetchCommunityDetails(newUuid);
  },
  { immediate: true }
);
</script>

<template>
  <main v-if="store.currentCommunity">
    <section>
      <div class="corDiferente">
        <h1>{{ store.currentCommunity.name }}</h1>
      </div>
      <div class="conteudo">
        <div class="lado">
          <img
            :src="store.currentCommunity.image || 'https://via.placeholder.com/150'"
            alt="Image of community"
          />
          <h2>@{{ store.currentCommunity.name }}</h2>
        </div>

        <div class="informacoes">
          <div class="seguidores">
            <p>Seguidores</p>
            <p>{{ store.currentCommunity.followers_count }}</p>
          </div>

          <div class="seguindo">
            <p>Seguindo</p>
            <p>0</p>
          </div>

          <div class="publicacoes">
            <p>Publicações</p>
            <p>0</p>
          </div>
        </div>

        <div class="descricao">
          <p>{{ store.currentCommunity.legend }}</p>
        </div>

        <button>Entrar na comunidade</button>

        <!-- Exibe informações do usuário somente se 'is_institute' for verdadeiro -->
        <div v-if="store.usuario.is_institute">
          <div class="user-info">
            <h3>Informações do Usuário</h3>
            <p><strong>Nome:</strong> {{ store.usuario.fullname }}</p>
            <p><strong>Email:</strong> {{ store.usuario.email }}</p>
            <p><strong>Telefone:</strong> {{ store.usuario.phone }}</p>
            <p><strong>Data de Nascimento:</strong> {{ store.usuario.birthday }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<style scoped>
/* Seus estilos já existentes */
section {
  margin-right: 6vw;
}
.corDiferente {
  background-color: #0A7C00;
  padding: 6vw 0 0.5vw 7vw;
  color: white;
  font-size: 1.7rem;
  border-radius: 1vw 1vw 0 0;
  position: relative;
}

.corDiferente h1 {
  margin-left: 3.8vw;
  font-weight: 600;
}

.lado h2 {
  position: absolute;
  margin: -5.8vw 0 0 10.8vw;
  font-size: 0.9rem;
  color: #00000085;
}

img {
  position: absolute;
  border-radius: 50%;
  width: 9vw;
  height: 9vw;
  object-fit: cover;
  top: -5vw;
  right: 58.9vw;
}

.conteudo {
  background-color: white;
  border-radius: 0 0 1vw 1vw;
  padding: 6vw 0 2vw 0;
  position: relative;
}

.descricao {
  background-color: #d3d3d388;
  margin: 1vw 2vw 2vw 2vw;
  font-size: 1.05rem;
  padding: 2vw;
  border-radius: 10px;
  text-align: justify;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  line-height: 130%;
}

.informacoes {
  display: flex;
  justify-content: right;
  text-align: center;
  margin-top: 1vw;
}

.informacoes div {
  margin: -4vw 1vw 2vw 4vw;
  border-right: 1px solid black;
  padding-right: 6.5vw;
}

.informacoes div:last-child {
  border-right: none;
}

.informacoes p {
  margin-top: 0.3vw;
}

button {
  display: block;
  margin: 0 auto;
  background-color: #0A7C00;
  border: none;
  font-size: 1.02rem;
  color: white;
  padding: 6px 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #086600f5;
  cursor: pointer;
  transform: scale(1.01);
}

/* Estilo adicional para as informações do usuário */
.user-info {
  background-color: #f0f0f0;
  padding: 1.5vw;
  margin-top: 2vw;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.user-info h3 {
  font-size: 1.3rem;
  margin-bottom: 1vw;
}

.user-info p {
  font-size: 1rem;
  margin: 0.5vw 0;
}
</style>
