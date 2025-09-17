<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'

const mostrarConfig = ref(false)
const mostrarUser = ref(false)
const isOn = ref(false)

onMounted(() => {
    userStore.fetchUsers();
})

</script>

<template>
    <header-component />
    <pag-user-component />
    <config-panel-component />
    <instituicao-component />
    <comunidades-component />
</template>


<style scoped>

</style>

