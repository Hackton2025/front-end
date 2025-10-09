<script setup>
import { useRouter } from 'vue-router';   

const router = useRouter();

function irParaInstituicao() {
  router.push('"/usuario/:uuid"');
}
    
</script>

<template>
  <RouterView></RouterView>
</template>