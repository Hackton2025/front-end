<script setup>
import headerComponent from '@/components/headerComponent.vue';
</script>

<template>
<header-component />

<div class="meio-pag">

    <div class="left" > 

    </div>

    <div class="right" >

    </div>

</div>
</template>

<style scoped>
.meio-pag{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.right, .left{
    background-color: white;
    margin: 2vw 3.5vw;
    border-radius: 10px;
    object-fit: cover;
    height: 75vh;
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.13);
}
</style>