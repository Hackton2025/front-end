import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
  const usuario = reactive({
    email: localStorage.getItem("userEmail") || "",
    fullname: localStorage.getItem("userFullname") || "",
    name: localStorage.getItem("userName") || "",
    phone: "",
    birthday: "",
    password: "",
    accept_notification: false,
    is_master: false,
  });

  const usuarioLogin = reactive({
    email: "",
    password: "",
  });
  const profile = reactive({
    is_man: true,
    links1: "",
    links2: "",
    first_profile_image_url: null,
    second_profile_image_url: null,
  });
  const confirmPassword = ref("");

  async function createAccount() {
    if (usuario.password !== confirmPassword.value) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.post("/users/", usuario);
      console.log("Usuário cadastrado:", response.data);
      alert("Conta criada com sucesso!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro ao criar conta. Tente novamente.");
    }
  }

  const token = ref(localStorage.getItem("token") || null);

  async function loginUser() {
    try {
      const response = await api.post("/users/login/", {
        email: usuarioLogin.email,
        password: usuarioLogin.password,
      });

      const { access, refresh, user, profile } = response.data;

      // Salva token JWT
      token.value = access;
      localStorage.setItem("token", access);
      localStorage.setItem("refresh", refresh);

      // Atualiza dados do usuário
      usuario.email = user.email;
      usuario.fullname = user.fullname;
      usuario.name = user.name;

      // Atualiza profile
      if (profile) {
        Object.assign(store.profile, profile);
      }

      alert("Login bem-sucedido!");
      window.location.href = "/home";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert(
        "Erro ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  }

  async function fetchProfile() {
    try {
      const response = await api.get("/profile/", {
        headers: { Authorization: `Bearer ${token.value}` },
      });

      if (response.data.length > 0) {
        Object.assign(profile, response.data[0]); // Carrega dados
      }
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  }

  async function updateProfile(updates) {
    try {
      const response = await api.patch(`/profile/${profile.uuid}/`, updates, {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      Object.assign(profile, response.data);
      alert("Perfil atualizado!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  }

  return {
    usuario,
    confirmPassword,
    createAccount,
    usuarioLogin,
    loginUser,
    token,
    profile,
    fetchProfile,
    updateProfile,
  };
});
