import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useContentStore = defineStore('content', () => {

    const contents = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const newContent = reactive({
        content: '',
        image: '',
        video: null,
        emergency: true,
        latitude: null,
        longitude: null,
    });

    async function buscarContents() {

        loading.value = true;
        error.value = null;
        try {
            const response = await api.get('/content/');
            contents.value = response.data;
            console.log('Conteúdos carregados:', response.data);
        } catch (err) {
            console.error('Erro ao buscar conteúdos:', err);
            error.value = err;
        } finally {
            loading.value = false;
        }
        
    }

      async function createContent() {
        try {
            const payload = {
                ...newContent,
            };
            const response = await api.post('/content/', payload);
            contents.value.unshift(response.data); 
            console.log('Conteúdo criado:', response.data);
            alert('Conteúdo criado com sucesso!');
            
            newContent.content = '';
            newContent.image = null;
            newContent.video = null;
            newContent.emergency = false;
            newContent.latitude = null;
            newContent.longitude = null;
        } catch (err) {
            console.error('Erro ao criar conteúdo:', err);
            alert('Erro ao criar conteúdo. Tente novamente.');
        }
    }

    return {
        contents,
        loading,
        error,
        newContent,
        fetchContents,
        createContent,
    };
});


