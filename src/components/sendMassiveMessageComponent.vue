<script setup>
    import { ref, reactive } from 'vue';


</script>
<template>
    <main>
        <section class="voltar">
            <span class="mdi mdi-arrow-left"></span>
            <RouterLink to="/home" class="return">Voltar</RouterLink>
        </section>

        <section class="selecionar-recebedores">
            
        </section>
    </main>
</template>
<style scoped>
main {
    padding: 1% 4vw;
    display: flex;
    justify-content: space-between;
}

.voltar {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #3A3A3A;
    cursor: pointer;
}

.voltar .return {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
}

.voltar .mdi {
    font-size: 2rem;
}

.voltar:hover {
    color: #00000085;
}

.voltar:hover .return {
    text-decoration: underline;
    color: #00000085;
}
</style>