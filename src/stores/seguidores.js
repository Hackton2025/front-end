import { defineStore } from "pinia";
import { ref } from "vue";

export const useSeguidoresStore = defineStore("seguidores", () => {
  const seguidoresInstituto = ref(13);
  const seguidoresUsuario = ref(Math.floor(Math.random() * 11));
  const seguidoresComunidade = ref(10);

  const seguindoInstituto = ref(1);
  const seguindoComunidades = ref(2);
  const seguindoUsuario = ref(Math.floor(Math.random() * 11));

  function addSeguidores(adicionar) {
    adicionar.value++;
  }

  function addSeguindo(adicionar) {
    adicionar.value++;
  }

  function removerSeguidores(remover) {
    if (remover.value > 0) {
      remover.value--;
    }
  }

  function removerSeguindo(remover) {
    if (remover.value > 0) {
      remover.value--;
    }
  }

  return {
    seguidoresInstituto,
    addSeguidores,
    seguidoresComunidade,
    seguidoresUsuario,
    seguindoComunidades,
    seguindoInstituto,
    seguindoUsuario,
    addSeguindo,
    removerSeguidores,
    removerSeguindo,
  };
});
