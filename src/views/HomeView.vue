<script setup>
    import homePageComponent from '@/components/homePageComponent.vue';
    import ConfigPanelComponent from '@/components/configPanelComponent.vue';

</script>
<template>
    <homePageComponent></homePageComponent>
    <configPanelComponent v-if="mostrarConfig" @cerrarConfig="mostrarConfig> !false"></configPanelComponent>
    <div>
    <ConfigPanel :visivel="mostrarConfig" @fechar="mostrarConfig = false" />
    <div
      v-if="mostrarConfig"
      @click="mostrarConfig = false"
      class="fixed inset-0 bg-black bg-opacity-30 z-40"
    ></div>
  </div>
</template>
