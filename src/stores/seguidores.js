import { defineStore } from "pinia";
import { ref } from "vue";

export const useSeguidoresStore = defineStore("seguidores", () => {
  const seguidoresInstituto = ref(13);
  const seguidoresUsuario = ref(Math.floor(Math.random() * 11));

  // Guardamos os seguidores de cada comunidade
  const seguidoresComunidade = ref({
    // exemplo: "uuidDaComunidade": 10
  });

  // Guardamos se o botão foi clicado (para alternar aumentar/diminuir)
  const clicadoComunidade = ref({
    // exemplo: "uuidDaComunidade": true/false
  });

  function toggleSeguidor(uuid) {
    if (!(uuid in seguidoresComunidade.value)) {
      seguidoresComunidade.value[uuid] = 0;
      clicadoComunidade.value[uuid] = false;
    }

    if (clicadoComunidade.value[uuid]) {
      // Já clicado → diminuir
      seguidoresComunidade.value[uuid]--;
      clicadoComunidade.value[uuid] = false;
    } else {
      // Não clicado → aumentar
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
