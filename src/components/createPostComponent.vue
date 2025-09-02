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

                    <div class="image" :class="{ 'has-image': store.imagepreview }">
                        <label for="file-input" class="uploud-box" :class="{ 'has-image': store.imagepreview }">
                            <div class="image-preview" v-if="store.imagepreview">
                                <img :src="store.imagepreview" alt="Preview" />
                            </div>
                            <div class="placeholder" v-else>
                                <span class="mdi mdi-camera-plus"></span>
                                <p>Clique para adicionar uma imagem</p>
                            </div>
                        </label>
                        <input id="file-input" type="file" @change="e => store.onFileChange(e, 'image')" style="display: none;" />
                    </div>

                     <div class="video" :class="{ 'has-video': store.videopreview }">
                        <label for="file-input-video" class="uploud-box" :class="{ 'has-video': store.videopreview }">
                            <div class="video-preview" v-if="store.videopreview">
                                <video :src="store.videopreview" alt="Preview" controls> </video>
                            </div>
                            <div class="placeholder" v-else>
                               <span class="mdi mdi-video"></span>
                                <p>Clique para adicionar um vídeo</p>
                            </div>
                        </label>
                        <input id="file-input-video" type="file" accept="video/*" @change="e => store.onFileChange(e, 'video')" style="display: none;" />
                    </div>
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

        </form>
         
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
        margin: 1vw 4vw;

    }
    .sidebar.left{
        grid-area: left;
        
    }
    .sidebar.right{
        grid-area: right;
        margin-left: 10vw;
    }

    form{
        margin-right: 3vw;
    }
    .voltar {
        padding-bottom: 1vw;
    }

    div.image-video{
        display: flex;
        justify-content: space-between;
        color: white;
        text-align: center;
    }
    .image{
        background-color: #00000040;
        margin-right: 1vw;
        padding: 7.5vw 3.4vw;
        border-radius: 8px;
        border: 1.8px black dashed;
    }
    .video{
        background-color: #00000040;
        margin-right: 1vw;
        padding: 7vw 3.8vw;
        border-radius: 8px;
        border: 1.8px black dashed;
    }
    .placeholder{
        cursor: pointer;
    }
    .image .placeholder p{
        margin-top: 0.6vw;
    }
    .placeholder p{
        font-size: 0.9rem ;
    }
    .mdi.mdi-camera-plus {
        font-size: 2.7vw;
    }
    .mdi.mdi-video{
        font-size: 3.5vw;
    }

    .has-image{
        background-color: transparent;
    }
 
    .uploud-box.has-image {
    border: none;
    background-color: transparent;
    padding: 0;
    }
</style>