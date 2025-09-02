import { defineStore } from "pinia";
import api from "@/plugins/axios";
import { ref } from "vue";

export const usePostStore = defineStore("post", () => {

    const image = ref(null);
    const imagepreview = ref(null);
    const video = ref(null);
    const videopreview = ref(null);

    function onFileChange(event, type) {
        const file = event.target.files[0];
        if (!file) return;

        if (type === 'image') {
            image.value = file;
            imagepreview.value = URL.createObjectURL(file);
        } else if (type === 'video') {
            video.value = file;
            videopreview.value = URL.createObjectURL(file);
        }
    }

    function onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            image.value = file;
            imagepreview.value = URL.createObjectURL(file);
        }
    }

    async function uploadImage() {
        try {
            const formData = new FormData();
            formData.append("file", image.value);

            const response = await api.post("/image/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Image uploaded:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    }



    return {
        imagepreview,
        image,
        onFileChange,
        uploadImage,
        video,
        videopreview,
    }
}
)
