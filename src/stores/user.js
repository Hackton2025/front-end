import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  const usuario = ref({
    email: '',
    fullname: '',
    name: '',
    phone: "",
    birthday: "",
    password: "",
    accept_notification: false,
    is_master: false,
  });

  const profile = ref({
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
      router.push("/");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro ao criar conta. Tente novamente.");
    }
  }

  const token = ref(localStorage.getItem("token") || null);

  async function loginUser(usuarioLogin) {
    try {
      const {data} = await api.post("/users/login/", {
        email: usuarioLogin.email,
        password: usuarioLogin.password,
      });

      console.log("Login bem-sucedido:", data);
      token.value = data.access;
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);

      usuario.value.email = data.user.email;
      usuario.value.fullname = data.user.fullname;
      usuario.value.name = data.user.name;

      if (data.user.profile) {
        Object.assign(profile.value, data.user.profile);
      }

      alert("Login bem-sucedido!");
      // const router = useRouter();
      router.push("/home");
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
        Object.assign(profile, response.data[0]); 
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
    token,
    profile,
    createAccount,
    loginUser,
    fetchProfile,
    updateProfile,
  };
});
