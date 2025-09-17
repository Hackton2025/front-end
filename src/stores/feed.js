import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);

  async function fetchPosts() {
    try {
      const response = await api.get("/content/");

      if (response.status === 200) {
        posts.value = response.data;

        console.log("Fetched posts", posts.value);
      }
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    }
  }

  return { posts, fetchPosts };
});
 