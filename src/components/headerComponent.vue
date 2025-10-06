<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'

const store = useUserStore()
const visivel = ref(false)
const visivelPerfil = ref(false)
</script>

<template>
  <!-- ===== TOPO (desktop) ===== -->
  <section class="topo">
    <img src="/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />

    <div class="input-area">
      <div class="input-wrapper">
        <span class="mdi mdi-magnify search-icon"></span>
        <input type="text" placeholder="Pesquisar..." />
      </div>
    </div>

    <div class="icons">
      <span class="mdi mdi-bell"></span>

      <img 
        :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'"
        class="avatar"
        @click="visivelPerfil = true"
      />
      <pag-user-component :visivelPerfil="visivelPerfil" @fecharPerfil="visivelPerfil = false" />

      <!-- ⚙️ abre painel lateral -->
      <span class="mdi mdi-cog" @click="visivel = true"></span>

    </div>
  </section>

  <!-- ===== NAV INFERIOR (mobile) ===== -->
  <section class="bottom-nav">
    <div class="nav-icon">
      <RouterLink to="/home">
        <span class="mdi mdi-home"></span>
      </RouterLink>
    </div>

    <div class="nav-icon">
      <RouterLink to="/">
        <span class="mdi mdi-magnify"></span>
      </RouterLink>
    </div>

    <div class="nav-icon">
      <RouterLink :to="`/usuario/${store.usuario.uuid}`">
        <img :src="store.profileImagePreview || store.profile.first_profile_image_url || '/img/default-avatar.png'" class="avatar"/>
      </RouterLink>
    </div>

    <!-- ⚙️ no celular abre rota /configurações -->
  <div class="nav-icon" >
  <span class="mdi mdi-cog"@click="visivel = true"></span>

</div>
  </section>
  <config-panel-component :visivel="visivel" @fechar="visivel = false" />
</template>

<style scoped>
/* ========== TOPO DESKTOP ========== */
.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw 4vw 0 3vw;
  gap: 20px;
}

.logo {
  width: 13%;
}

.input-area {
  flex: 1;
  display: flex;
  justify-content: center;
}

.input-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
}

input {
  width: 100%;
  padding: 10px 15px 10px 35px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  pointer-events: none;
}

.icons {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  padding: 5px;
}

.avatar {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: solid 2px black;
  margin-top: 3%;
}

.bottom-nav {
  display: none; /* desktop default */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  border-top: 1px solid #ccc;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.nav-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-icon span.mdi {
  font-size: 1.8rem;
  color: #2c3e50;
}

.nav-icon img.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #333;
  object-fit: cover;
}

/* ========== RESPONSIVO MOBILE ========== */
@media (max-width: 768px) {
  .topo {
    display: none;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
.bottom-nav{
    display: flex; /* mostra a nav no mobile */
  }
  .logo {
    width: 50%;
  }

  .input-wrapper input {
    font-size: 0.9rem;
    padding: 8px 10px 8px 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .icons {
    gap: 5px;
  }

  .input-area {
    width: 100%;
  }
}
</style>
