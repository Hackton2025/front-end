import { defineStore } from "pinia";
import api from "@/plugins/axios";
import { ref } from "vue";
import { useUserStore } from "./user";

export const usePostStore = defineStore("post", () => {
  const userStore = useUserStore();
  const post = ref({
    image: null,
    imagepreview: null,
    video: null,
    videopreview: null,
    content: '',
  });

  const legenda = ref("");
  const posts = ref([])
  function onFileChange(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    event.target.value = null;

    if (type === "image") {
      if (post.value.imagepreview) URL.revokeObjectURL(post.value.imagepreview);
      post.value.image = null;
      post.value.imagepreview = null;

      setTimeout(() => {
        post.value.image = file;
        post.value.imagepreview = URL.createObjectURL(file);

        if (post.value.videopreview) {
          URL.revokeObjectURL(post.value.videopreview);
          post.value.video = null;
          post.value.videopreview = null;
        }
      }, 0);
    } else if (type === "video") {
      if (post.value.videopreview) URL.revokeObjectURL(post.value.videopreview);
      post.value.video = null;
      post.value.videopreview = null;

      setTimeout(() => {
        post.value.video = file;
        post.value.videopreview = URL.createObjectURL(file);

        if (post.value.imagepreview) {
          URL.revokeObjectURL(post.value.imagepreview);
          post.value.image = null;
          post.value.imagepreview = null;
        }
      }, 0);
    }
  }

  async function uploadImage() {
    const formData = new FormData();
    formData.append("file", post.value.image);

    const response = await api.post("/image-uploader/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }

  async function uploadVideo() {
    const formData = new FormData();
    formData.append("file", post.value.video);

    const response = await api.post("/video-uploader/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }

  async function createPost() {
    try {
      const formData = new FormData();

      if (post.value.image) {
        const imageData = await uploadImage();
        formData.append("image", imageData.id);
      }

      if (post.value.video) {
        const videoData = await uploadVideo();
        formData.append("video", videoData.attachment_key); // 👈 UUID aqui
      }

      formData.append("content", legenda.value);
      formData.append("author", userStore.profile.uuid);

      const response = await api.post("/content/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }


  async function publicarPost() {
    const data = await createPost();

    legenda.value = '';
    post.value.image = null;
    post.value.imagepreview = null;
    post.value.video = null;
    post.value.videopreview = null;

    return data;
  }

  async function fetchPosts() {
    try {
      const response = await api.get("/content/");
      posts.value = response.data;
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      throw error;
    }
  }

  return {
    post,
    legenda,
    onFileChange,
    uploadImage,
    uploadVideo,
    createPost,
    publicarPost,
    fetchPosts,
    posts,
  };
});
