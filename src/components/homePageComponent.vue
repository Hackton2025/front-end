<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'
import pagUserComponent from './pagUserComponent.vue'
import feedComponent from '@/components/feedComponent.vue'

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
    <div class="geral">

    <div class="left">
    <instituicao-component />
    <comunidades-component />
    </div>
    <div class="centro">
        <feedComponent></feedComponent>
    </div>
    </div>

</template>


<style scoped>
    .geral{
        display: flex;
        margin-top: 2vw;
    }
    .left{
        justify-content: left;

    }
    .centro{
        justify-content: center;
    }
</style>

