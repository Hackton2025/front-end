<script setup>

</script>

<template>
    <main>
        <forms class="sidebar.right" style="background-color: aqua;">
            
            <div class="voltar">
                    <span class="mdi mdi-arrow-left"></span>
                    <RouterLink to="/home" class="return">Voltar</RouterLink>
            </div>

            <div>

            </div>

            <div class="legend">
                <h3>Adicionar Legenda</h3>
                <input type="text">
            </div>

            <div class="opitions">
                <div class="marcar-pessoas">
                    <span class="mdi mdi-account"></span>
                    <p>Marcar pessoas</p>
                </div>
                <div class="localizacao">
                    <span class="mdi mdi-map-marker"></span>
                    <p>Localização</p>
                </div>
            </div>

        </forms>
        <section class="sidebar.left" style="background-color: blueviolet;">
            oi
        </section>
    </main>
</template>

<style scoped>
    main{
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-template-areas: 'left right';

    }
    .sidebar.left{
        grid-area: left;
    }
    .sidebar.right{
        grid-area: right;
    }
</style>