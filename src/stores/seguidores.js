import { defineStore } from "pinia";
import { ref } from "vue";

export const useSeguidoresStore = defineStore("seguidores", () => {
  const seguidoresInstituto = ref(13);
  const seguidoresUsuario = ref(Math.floor(Math.random() * 11)); // segue fixo

  // Cada comunidade terá seu número inicial de seguidores
  const seguidoresComunidade = ref({});

  // Controle de clique por comunidade
  const clicadoComunidade = ref({});

  function toggleSeguidor(uuid) {
    // Se ainda não existe, inicializa com 0 seguidores
    if (!(uuid in seguidoresComunidade.value)) {
      seguidoresComunidade.value[uuid] = 0;
      clicadoComunidade.value[uuid] = false;
    }

    // Alterna clique → aumenta/diminui
    if (clicadoComunidade.value[uuid]) {
      seguidoresComunidade.value[uuid]--;
      clicadoComunidade.value[uuid] = false;
    } else {
      seguidoresComunidade.value[uuid]++;
      clicadoComunidade.value[uuid] = true;
    }
  }

  return {
    seguidoresInstituto,
    seguidoresUsuario,
    seguidoresComunidade,
    clicadoComunidade,
    toggleSeguidor,
  };
});
