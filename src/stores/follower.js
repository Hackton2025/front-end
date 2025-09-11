import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useFollowerStore = defineStore("follower", () => {
  const followers = ref([]);   // pessoas que me seguem
  const following = ref([]);   // pessoas que eu sigo
  const loading = ref(false);
  const error = ref(null);

  // buscar quem segue o usuário
  async function fetchFollowers(userId) {
    loading.value = true;
    try {
      const response = await api.get(`/followers/?following=${userId}`);
      followers.value = response.data;
    } catch (err) {
      error.value = err;
      console.error("Erro ao buscar followers:", err);
    } finally {
      loading.value = false;
    }
  }

  // buscar quem o usuário está seguindo
  async function fetchFollowing(userId) {
    loading.value = true;
    try {
      const response = await api.get(`/followers/?follower=${userId}`);
      following.value = response.data;
    } catch (err) {
      error.value = err;
      console.error("Erro ao buscar following:", err);
    } finally {
      loading.value = false;
    }
  }

  // seguir alguém
  async function follow(followerId, followingId) {
    try {
      const response = await api.post("/followers/", {
        follower: followerId,
        following: followingId,
      });
      console.log("Seguiu:", response.data);
      // opcional: atualizar lista local
      following.value.push(response.data);
    } catch (err) {
      console.error("Erro ao seguir:", err);
      throw err;
    }
  }

  // deixar de seguir alguém
  async function unfollow(followerId, followingId) {
    try {
      // você precisa ter o `id` do relacionamento para deletar
      const response = await api.delete(
        `/followers/${followerId}/${followingId}/`
      );
      console.log("Deixou de seguir:", response.data);
      // atualizar lista local
      following.value = following.value.filter(
        (f) => f.following.id !== followingId
      );
    } catch (err) {
      console.error("Erro ao deixar de seguir:", err);
      throw err;
    }
  }

  return {
    followers,
    following,
    loading,
    error,
    fetchFollowers,
    fetchFollowing,
    follow,
    unfollow,
  };
});
