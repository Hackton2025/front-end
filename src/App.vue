<script setup>
import { useRouter } from 'vue-router';
import router from './router';

const router = useRouter();

function irParaInstituicao() {
  router.push('/instituicao');
}
    
</script>

<template>
  <RouterView></RouterView>
</template>