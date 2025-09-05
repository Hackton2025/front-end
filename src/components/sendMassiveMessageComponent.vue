<script setup>
    import { ref, reactive } from 'vue'; 
    import api from "@/plugins/axios";

    async function getImageUploader(attachment_key) {
        const uploader_image = {
        url: "",
        attachment_key: attachment_key,
        uploaded_on: "",
        }
        

        const response = await api.get("/image-uploader/", image-uploader)
        return response.data
    }

    const content = {
        author: "3cf0b59b-1024-42a2-a55f-b741f64d7bb2", 
        content: "porra", 
        image: getImageUploader("0999ff91-c365-4615-b099-6f692223297b"), 
        video: null,
        emergency: true,
    }

    async function createMassiveMessage() {
       const response = await api.post("/content/", content)
       return response.data    
    }

    console.log(createMassiveMessage())


</script>
<template>
    <main>
        <section class="voltar">
            <span class="mdi mdi-arrow-left"></span>
            <RouterLink to="/home" class="return">Voltar</RouterLink>
        </section>

        <section class="selecionar-recebedores">
            <div class="conteiner-checkbox">
                
            </div>
        </section>
        <section class="right-massive"></section>
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