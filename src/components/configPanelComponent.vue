<template>
  <div
    class="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out"
    :class="visivel ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-4 flex justify-end">
      <button @click="$emit('fechar')">❌</button>
    </div>

    <div class="px-6">
      <!-- conteúdo da config aqui -->
      <h2 class="text-xl font-bold mb-4">Configurações</h2>
      <p>Email: email@gmail.com</p>
      <p>Usuário: user.usuario</p>
      <!-- e etc -->
    </div>
  </div>
</template>

<script setup>
defineProps(['visivel'])
defineEmits(['fechar'])
</script>