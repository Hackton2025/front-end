import { defineStore } from "pinia";
import api from "@/plugins/axios";
import { ref, reactive, computed, onMounted } from "vue";

export const useComunittyStore = defineStore("comunitty", () => {
    const community = reactive({
        name: '',
        image: null,
        legend: '',
    });

    const communities = ref([]);
    const search = ref('');
    const imagepreview = ref(null);

    function onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            imagepreview.value = URL.createObjectURL(file);
            community.image = file;
        }
    }



    async function uploudImage() {
        try {
            const formData = new FormData();
            formData.append('file', community.image); // use community.image, não file

            const response = await api.post('/image-uploader/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Image uploaded:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    }





    async function submitCommunity() {
        try {
            let imageKey = null;

            if (community.image) {
                const uploaded = await uploudImage();
                imageKey = uploaded.attachment_key;
            }

            const response = await api.post('/community/', {
                name: community.name,       // ✅ campo certo
                image: imageKey,            // ✅ attachment_key
                legend: community.legend,   // ✅ campo certo
            });

            alert('Comunidade criada com sucesso!');
            console.log('Community created:', response.data);
            // Reset form
            community.name = '';
            community.image = null;
            community.legend = '';
            imagepreview.value = null;
            // Refetch communities to include the new one
            fetchCommunities();

        } catch (error) {
            console.error('Error creating community:', error.response?.data || error);
        }
    }






    async function fetchCommunities() {
        try {
            const response = await api.get('/community/');
            console.log('Fetched communities:', response.data);
            communities.value = response.data; // ✅ agora salva no estado
        } catch (error) {
            console.error('Error fetching communities:', error);
        }
    }

    const filteredCommunities = computed(() => {
        if (!search.value) {
            return communities.value;
        }
        return communities.value.filter(comn =>
            comn.name.toLowerCase().includes(search.value.toLowerCase())
        );
    });



    onMounted(() => {
        fetchCommunities();
    });

    return {
        community,
        communities,
        search,
        imagepreview,
        onFileChange,
        uploudImage,
        submitCommunity,
        fetchCommunities,
        filteredCommunities,
    };
});