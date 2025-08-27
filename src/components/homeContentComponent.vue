<script>
</script>

<template>
    <div class="feed">
        <div class="new-post">
            <img src="/public/img/braz.png" alt="foto-perfil">
            <div class="texto-post">
                <input class="pensamentos" type="text" placeholder="Conte aos seus amigos seus pensamentos." />
            </div>
        </div>
        <div class="postagens">


        </div>

    </div>

</template>

<style>


.new-post {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;



}

.feed img {
    width: 3vw;
    height: 3vw;
    border-radius: 15%;
    padding: 2px;
    background-color: #2F9E41;

}

.texto-post {
    flex: 1;
}

input.pensamentos {

    width: 100%;
    padding: 1vw 0 0.6vw 1vw;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: #D3D3D3;
    font-size: 1rem;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
}
</style>