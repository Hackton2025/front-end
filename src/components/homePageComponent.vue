<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'
import feedComponent from '@/components/feedComponent.vue'

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
})
</script>

<template>
  <header-component />
  <pag-user-component />
  <config-panel-component />

  <div class="geral">
    <div class="left">
      <instituicao-component />
      <comunidades-component class="comunidades-left" />
    </div>

    <div class="centro">
      <feedComponent />
      <comunidades-component class="comunidades-mobile" />
    </div>
  </div>
</template>

<style scoped>
.geral {
  display: flex; 
  margin-top: 2vw;
  align-items: flex-start; 
  justify-content: space-between;
}

.left {
  width: 20%;
  display: flex;
  flex-direction: column;
}

.centro {
  width: 70%;
}

.comunidades-mobile {
  display: none;
}

/* Responsividade */
@media (max-width: 768px) {
  .geral {
    flex-direction: column;
    margin-top: 0;
  }

  .left {
    width: 100%;
  }

  .centro {
    width: 100%;
  }

  .comunidades-left {
    display: none;
  }
  .comunidades-mobile {
    display: block;
    margin-top: 2rem;
  }
}
</style>
