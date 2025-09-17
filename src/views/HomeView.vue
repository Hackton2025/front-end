<script setup>
import { ref } from 'vue';
import homePageComponent from '@/components/homePageComponent.vue';
import ConfigPanelComponent from '@/components/configPanelComponent.vue';


const mostrarConfig = ref(false);
</script>

<template>

  <homePageComponent />

  <configPanelComponent v-if="mostrarConfig" @cerrarConfig="mostrarConfig = !mostrarConfig" />

  <div
    v-if="mostrarConfig"
    @click="mostrarConfig = false"
    class="fixed inset-0 bg-black bg-opacity-30 z-40"
  ></div>
</template>
