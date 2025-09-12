<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function irParaInstituicao() {
  router.push('/instituicao');
}
</script>

<template>
  <button @click="irParaInstituicao">teste</button>
  <RouterView></RouterView>
</template>