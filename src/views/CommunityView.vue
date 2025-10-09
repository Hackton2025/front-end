<script setup>
import headerComponent from '@/components/headerComponent.vue';
import AreaCommunityComponent from '@/components/AreaCommunityComponent.vue';
import instituicaoComponent from '@/components/instituicaoComponent.vue';
import comunidadesComponent from '@/components/comunidadesComponent.vue';
</script>

<template>

<headerComponent />

<div class="conteudo">

    <div class="sidebar-left">
        <instituicaoComponent />        
        <comunidadesComponent />
    </div>

    <div class="sidebar-right">
        <AreaCommunityComponent/>
    </div>

</div>
</template>

<style scoped>
div.conteudo{
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2vw;
    margin-top: 2vw;
}



/* RESPONSIVIDADE: telas menores que 768px */
@media (max-width: 768px) {
    div.conteudo {
        display: grid;               /* mantemos grid */
        grid-template-columns: 1fr;  /* apenas uma coluna */
        grid-template-rows: auto auto; /* duas linhas */
        gap: 2rem;                   /* espaço entre os elementos */
    }

    /* sidebar-left vem primeiro automaticamente */
    .sidebar-right {
        /* já estará abaixo da esquerda */
        margin-top: 0; /* opcional */
    }
}

</style>
