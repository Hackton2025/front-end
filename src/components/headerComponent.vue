<script setup>
  import { ref } from 'vue'
  import { useUserStore } from '@/stores/user'

  const store = useUserStore()
  import configPanelComponent from './configPanelComponent.vue'
  import pagUserComponent from './pagUserComponent.vue'
  const visivel = ref(false)
  const visivelPerfil = ref(false)
</script>

<template>
     <section class="topo">
      <img src="/public/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />
      
      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </div>

      <div class="icons">
        <span class="mdi mdi-bell"></span>
        <img :src="store.profileImagePreview
          || (typeof store.profile.first_profile_image_url === 'string'
            ? store.profile.first_profile_image_url  
            : null)" class="avatar" @click="visivelPerfil = true"></img>
        <pag-user-component :visivelPerfil="visivelPerfil" @fecharPerfil="visivelPerfil = false" />

        <span class="mdi mdi-cog" @click="visivel = true"></span>
        <config-panel-component :visivel="visivel" @fechar="visivel = false" />
      </div>
    </section>
</template>

<style scoped>
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
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: solid 2px black;
  margin-top: 3%;
}
</style>