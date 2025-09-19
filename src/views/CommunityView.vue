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
    grid-template-areas: "left right";
    margin-top: 2vw;
}

.sidebar-left{
    grid-area: left ;
}
.sidebar-right{
    grid-area: right;
}
</style>