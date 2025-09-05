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

  event.target.value = null;

  if (type === "image") {
    if (imagepreview.value) URL.revokeObjectURL(imagepreview.value);
    image.value = null;      
    imagepreview.value = null;

    setTimeout(() => {
      image.value = file;
      imagepreview.value = URL.createObjectURL(file);

      if (videopreview.value) {
        URL.revokeObjectURL(videopreview.value);
        video.value = null;
        videopreview.value = null;
      }
    }, 0);

  } else if (type === "video") {
    if (videopreview.value) URL.revokeObjectURL(videopreview.value);
    video.value = null;
    videopreview.value = null;

    setTimeout(() => {
      video.value = file;
      videopreview.value = URL.createObjectURL(file);

      if (imagepreview.value) {
        URL.revokeObjectURL(imagepreview.value);
        image.value = null;
        imagepreview.value = null;
      }
    }, 0);
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

  async function createPost() {
  try {
    const formData = new FormData();

    if (image.value) {
      formData.append("image", image.value);  
    }

    if (video.value) {
      formData.append("video", video.value);   
    }

    formData.append("content", legenda.value); 

    const response = await api.post("/posts/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Post criado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw error;
  }
}

    const legenda = ref("")

    return {
        imagepreview,
        image,
        onFileChange,
        uploadImage,
        video,
        videopreview,
        legenda,
        createPost,
    }
}
)
