<script setup>
import { ref } from 'vue'

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'

const mostrarConfig = ref(false)
const isOn = ref(false)
</script>

<template>
    <header-component />
    <instituicao-component />
    <comunidades-component />
</template>
<style scoped>

</style>

