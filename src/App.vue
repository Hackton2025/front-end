<script setup>
    import router from './router';
</script>



<template>
  <button @click="router.push('/criar-postagem')">teste</button>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
