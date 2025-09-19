<script setup>
import { onMounted } from 'vue';
    import { useComunittyStore } from '@/stores/comunitty';

    const store = useComunittyStore();

    onMounted(() => {
  store.fetchCommunities();
});
</script>

    <template>
        <main>
            <section class="voltar-mais-comunidades">
                <section class="voltar">
                    <span class="mdi mdi-arrow-left"></span>
                    <RouterLink to="/instituicao" class="return">Voltar</RouterLink>
                </section>
                <section class="comunidades-existentes">
                    <div class="input-wrapper">
                        <input type="text" v-model="store.search" placeholder="Pesquisar..." />
                        <span class="mdi mdi-magnify search-icon"></span>
         </div>
                    <ul>
                        <li v-for="comn in store.communities" :key="comn.id">
                            <img :src="comn.image" alt="comunidade" />
                            <h3>{{ comn.name }}</h3>
                        </li>
                    </ul>

                </section>    
            </section>

            <section class="criar-comunidade">
                <form @submit.prevent="store.submitCommunity">
                    <div class="uploud-wrapper" :class="{ 'has-image': store.imagepreview }">
                        <label for="file-input" class="uploud-box" :class="{ 'has-image': store.imagepreview }">
                            <div class="image-preview" v-if="store.imagepreview">
                                <img :src="store.imagepreview" alt="Preview" />
                            </div>
                            <div class="placeholder" v-else>
                                <span class="mdi mdi-camera-plus"></span>
                                <p>Clique para adicionar uma imagem</p>
                            </div>
                        </label>
                        <input id="file-input" type="file" @change="store.onFileChange" style="display: none;" />
                    </div>

                    <div class="abaixo-da-img">
                        <div class="left-column">
                            <div class="input-group">
                                <label for="communityName">Nome da Comunidade</label>
                                <input type="text" id="name" v-model="store.community.name"
                                    placeholder="Nome da Comunidade" />
                            </div>
                            <!-- <div class="input-group">
                                <label for="name">Nome de usuário</label>
                                <input type="text" id="name" v-model="community.name" placeholder="Nome de usuário" />
                            </div> -->
                            <div class="input-group">
                                <label for="admins">Administradores</label>
                                <input type="text" id="admins" v-model="store.community.admins"
                                    placeholder="Administradores" />
                            </div>
                        </div>

                        <div class="right-column">
                            <div class="legend-group">
                                <label for="legend">Legenda</label>
                                <textarea id="legend" v-model="store.community.legend" placeholder="Legenda"></textarea>
                            </div>
                            <button type="submit" class="btn-submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    </template>

<style scoped>
main {
    padding: 1% 4vw;
    display: flex;
    justify-content: space-between;
}

.voltar-mais-comunidades {
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: 1vw;
    margin-top: 3%;
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

.comunidades-existentes {
    margin-top: 1vw;
    width: 100%;
    background-color: white;
    padding: 1vw;
    min-height: 70vh;
    border-radius: 20px;
}

.input-wrapper {
    position: relative;
    width: 80%;
    text-align: center;
    background-color: #d9d9d9;
    border-radius: 10px;
    margin: 0 auto;
}

.input-wrapper input {
    width: 100%;
    padding: 1vw;
    border: none;
    border-radius: 10px;
    background-color: #d9d9d9;
}

.input-wrapper input:focus {
    outline: none;
    border: #000 solid 1px;
}

.search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #888;
    pointer-events: none;
}

.comunidades-existentes ul {
    list-style: none;
    margin-top: 1vw;
    padding: 0 3vw;
}

.comunidades-existentes ul li {
    display: flex;
    align-items: center;
    gap: 3vw;
    padding: 10px 0;
}

.comunidades-existentes ul li img {
    width: 4vw;
    height: 4vw;
    border-radius: 15%;
    padding: 2px;
    background-color: #2F9E41;
}

.comunidades-existentes ul li h3 {
    font-size: 1.5rem;
}

.criar-comunidade {
    margin-top: 1vw;
    width: 60%;
    background-color: white;
    border-radius: 20px;
}

.criar-comunidade form {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
}

.uploud-wrapper {
    display: flex;
    justify-content: center;
    background-color: #00000040;
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
}

.uploud-wrapper.has-image {
    background-color: transparent;
}

.uploud-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    width: 100%;
    padding: 2vw;
    border: 2px dashed #000;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    height: 40vh;
}

.uploud-box.has-image {
    border: none;
    background-color: transparent;
    padding: 0;
}

.placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    color: #fff;
}

.placeholder .mdi {
    font-size: 3rem;
}

.image-preview {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
}

.image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: #000 dashed 2px;
}

.abaixo-da-img {
    display: flex;
    gap: 2vw;
    align-items: flex-start;
    margin-top: 1rem;
}

/* Coluna esquerda com os inputs */
.left-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    max-width: 60%;
}

/* Cada grupo de label + input */
.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-group label {
    font-size: 0.9rem;
    margin-left: 0.5rem;
}

.input-group input {
    padding: 0.7rem;
    border: none;
    background-color: #d9d9d9;
    border-radius: 5px;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
}

/* Coluna direita com legenda e botão */
.right-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 35%;
}

/* Grupo da legenda */
.legend-group {
    display: flex;
    flex-direction: column;
    height: calc(2 * (3.5rem + 1rem));
    /* altura aproximada dos dois primeiros inputs + gap */
}

.legend-group label {
    font-size: 0.9rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
}

.legend-group textarea {
    flex-grow: 2;
    padding: 0.5rem;
    border: none;
    background-color: #d9d9d9;
    border-radius: 5px;
    font-size: 0.9rem;
    resize: none;
    height: 100%;
}

/* Botão alinhado à direita e no final da coluna */
.btn-submit {
    align-self: flex-end;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    background-color: #2F9E41;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin-top: auto;
    width: 100%;
    margin-top: 1.6vw;

    &:hover {
        background-color: #267c33;
        transition: 0.4s;
    }
}
</style>
