<script setup>
import { usePostStore } from '@/stores/post'

const store = usePostStore();   
</script>

<template>

    <main>

        <form class="sidebar.right">

            <div class="voltar">
                <RouterLink to="/home" class="return">
                    <span class="mdi mdi-arrow-left"></span>
                    Voltar
                </RouterLink>
            </div>

            <div class="image-video">

                <div class="image">
                    <label for="file-input" class="uploud-box">
                        <template v-if="store.imagepreview && !store.videopreview">
                            <div class="image-preview">
                                <img :src="store.imagepreview" alt="Preview" />
                            </div>
                        </template>
                        <template v-else>
                            <div class="placeholder">
                                <span class="mdi mdi-camera-plus"></span>
                                <p>Clique para adicionar uma imagem</p>
                            </div>
                        </template>

                    </label>
                    <input id="file-input" type="file" accept="image/*" @change="e => store.onFileChange(e, 'image')"
                        style="display: none;" />
                </div>


                <div class="video">
                    <label for="file-input-video" class="uploud-box">
                        <template v-if="store.videopreview && !store.imagepreview">
                            <div class="video-preview">
                                <video :src="store.videopreview" controls></video>
                            </div>
                        </template>
                        <template v-else>
                            <div class="placeholder">
                                <span class="mdi mdi-video"></span>
                                <p>Clique para adicionar um vídeo</p>
                            </div>
                        </template>
                    </label>
                    <input id="file-input-video" type="file" accept="video/*"
                        @change="e => store.onFileChange(e, 'video')" style="display: none;" />
                </div>
            </div>

            
            <div class="legend">
                <h3>Adicionar Legenda</h3>
                <textarea v-model="store.legenda"> </textarea>
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

        </form>

        <section class="sidebar.left" style="background-color: white; border-radius: 15px;">

            <div class="profile">
                <img src="/public/img/agropecuaria.png" alt="" class="imageProfile">

                <div class="name">
                    <p>name</p>
                    <p>fullname</p>
                </div>
            </div>
            <div class="exibicaolegend">
                {{ store.legenda }}
            </div>
            <div v-if="store.imagepreview" class="WrapperImage">
                <img :src="store.imagepreview" alt="imagePost" class="imagePost">
            </div>

        </section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-areas: 'left right';
    margin: 1vw 4vw;

}

.sidebar.left {
    grid-area: left;
    background-color: #fff;
    border-radius: 20px;
}


.sidebar.right {
    grid-area: right;

}

form {
    margin-right: 3vw;
}

.voltar {
    padding-bottom: 1vw;
}

div.image-video {
    display: flex;
    justify-content: space-between;
    color: white;
    text-align: center;
}

.image,
.video {
    background-color: #00000040;
    margin-right: 1vw;
    width: 350px;
    height: 360px;
    border-radius: 8px;
    border: 1. 8px black dashed;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}


.placeholder {
    cursor: pointer;
}

.image .placeholder p {
    margin-top: 0.6vw;
}

.placeholder p {
    font-size: 0.9rem;
}

.mdi.mdi-camera-plus {
    font-size: 2.7vw;
}

.mdi.mdi-video {
    font-size: 3.5vw;
}

.image-preview img,
.video-preview video {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    transition: 1s;
}

.legend {
    margin-top: 1.5vw;
    margin-bottom: 3vw;
    flex-direction: column;
    margin: 2vw 0 0 0;
}

.legend textarea {
    width: 100%;
    height: 12vh;
    border-radius: 5px;
    border: none;
    padding-left: 0.5vw;
    margin-top: 0.5vw;
    margin-bottom: 3vw;
}

.marcar-pessoas,
.localizacao {
    display: flex;
    background-color: white;
    margin-top: 1vw;
    padding: 10px 10px;
    font-size: 1.1rem;
    border-radius: 5px;
    align-items: center;
}

.mdi.mdi-map-marker {
    font-size: 1.3rem;
    margin-right: 0.5vw;
}

.mdi.mdi-account {
    font-size: 1.4rem;
    margin-right: 0.5vw;
}
.profile{
    display: flex;
}
.imageProfile{
    border-radius: 10px;
    box-shadow: 1px 1px 1px #00000040;
}
.WrapperImage{
    object-fit: cover;
}
.exibicaolegend{
    width: 50;
}
.imagePost{
    object-fit: cover;
    overflow: hidden ;
    height: 40vh;
    width: 80vh;
}
</style>