<script setup>
import { ref } from 'vue'

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'
import storysComponent from './storysComponent.vue'
import homeContentComponent from './homeContentComponent.vue'


const mostrarConfig = ref(false)
const isOn = ref(false)
</script>

<template>
     <header-component />
    <main>
        <div class="sidebar-left">
            <instituicao-component />
            <comunidades-component />
        </div>
        <div class="center">
            <storys-component />
            <home-content-component />
        </div>
     
    </main>
</template>
<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 
        'left center right';
    width: 100vw;
}

.sidebar-left {
    grid-area: left;
}

.sidebar-right {
    grid-area: right;
}
.center {
    grid-area: center;
}



</style>

