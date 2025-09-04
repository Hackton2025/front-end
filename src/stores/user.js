import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  const usuario = ref({
    uuid: null,
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
    uuid: null,
    is_man: true,
    links1: "",
    links2: "",
    firstProfileImage: null,
    secondProfileImage: null,
  });

  const confirmPassword = ref("");
  const token = ref(localStorage.getItem("token") || null);
  const profileImagePreview = ref(null);


  // Criar conta

  async function createAccount() {
    if (usuario.value.password !== confirmPassword.value) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.post("/users/", {
        email: usuario.value.email,
        fullname: usuario.value.fullname,
        name: usuario.value.name,
        password: usuario.value.password,
      });

      console.log("Usuário cadastrado:", response.data);
      alert("Conta criada com sucesso!");
      router.push("/"); // volta para login
    } catch (error) {
      console.error("Erro ao criar conta:", error.response?.data || error);
      if (error.response?.data) {
        alert(
          "Erro ao criar conta:\n" +
          Object.entries(error.response.data)
            .map(([campo, msg]) => `${campo}: ${msg}`)
            .join("\n")
        );
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    }
  }


  // Login

  async function loginUser(usuarioLogin) {
    try {
      const { data } = await api.post("/users/login/", {
        email: usuarioLogin.email,
        password: usuarioLogin.password,
      });

      console.log("Login bem-sucedido:", data);

      token.value = data.access;
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);

      // Atualiza dados do usuário
      usuario.value.email = data.user.email;
      usuario.value.fullname = data.user.fullname;
      usuario.value.name = data.user.name;
      usuario.value.phone = data.user.phone;
      usuario.value.birthday = data.user.birthday;
      usuario.value.accept_notification = data.user.accept_notification;
      usuario.value.is_master = data.user.is_master;
      usuario.value.uuid = data.user.uuid; // ✅ ESSENCIAL

      if (data.user.profile) {
        Object.assign(profile.value, data.user.profile);
      }

      alert("Login bem-sucedido!");
      console.log(usuario.value);
      router.push("/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error.response?.data || error);
      alert(
        "Erro ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  }


  // Buscar perfil (agora pega o último do array)

  async function fetchProfile() {
    try {
      const response = await api.get("/profile/", {
        headers: { Authorization: `Bearer ${token.value}` },
      });

      if (response.data.length > 0) {
        // Pega o último perfil do array (perfil atual)
        Object.assign(profile.value, response.data[response.data.length - 1]);
      }
    } catch (error) {
      console.error("Erro ao buscar perfil:", error.response?.data || error);
    }
  }

  function onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      profileImagePreview.value = URL.createObjectURL(file);
      profile.value.firstProfileImage = file;
    }
  }

  async function uploadProfileImage() {
    // if (!profileImageFile.value || !profile.value.uuid) {
    //   alert("Nenhum arquivo selecionado ou perfil inválido.");
    //   return null;
    // }

    const formData = new FormData();
    formData.append("file", profile.value.firstProfileImage.value);

    try {
      const response = await api.post(
        `/image-uploader/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log("Imagem de perfil enviada:", response.data);

      // Atualiza a URL da imagem no perfil
      if (response.data.firstProfileImage) {
        profile.value.firstProfileImage = response.data.firstProfileImage;
        alert("Imagem de perfil enviada com sucesso!");
        return response.data.firstProfileImage;  // Retorna a URL da imagem atualizada
      }

      return null;
    } catch (error) {
      console.error("Erro ao enviar imagem de perfil:", error.response?.data || error);
      alert("Erro ao enviar imagem de perfil. Tente novamente.");
      return null;
    }
  }


  // Atualizar perfil

  async function updateProfile() {
    try {
      let imageUrl = null;

      if (profile.value.firstProfileImage.value) {
        imageUrl = await uploadProfileImage();
      }

      const updates = {
        links1: profile.value.links1,
        links2: profile.value.links2,
        legend: profile.value.legend,
        profileImagePreview: profile.value.profileImagePreview,
      };

      if (imageUrl) {
        updates.profileImagePreview = imageUrl;  // Atualize com o campo correto
      }
      console.log('Atualizações do perfil:', updates);
      const response = await api.patch(`/profile/${profile.value.uuid}/`, updates, {
        headers: { Authorization: `Bearer ${token.value}` },
      });

      Object.assign(profile.value, response.data);
      alert('Perfil atualizado!');
      profile.value.firstProfileImage = null;
      profileImagePreview.value = null;

    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar perfil.');
    }
  }





  // Atualizar dados do usuário

  async function updateUser(updates) {
    try {
      const response = await api.patch(
        `/users/${usuario.value.uuid}/`,
        updates,
        { headers: { Authorization: `Bearer ${token.value}` } }
      );

      Object.assign(usuario.value, response.data);
      alert("Usuário atualizado!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error.response?.data || error);
      alert("Erro ao atualizar usuário. Verifique os dados e tente novamente.");
    }
  }

  onMounted(() => {
    if (token.value) {
      fetchProfile();
    }
  });

  

  return {
    usuario,
    confirmPassword,
    token,
    profile,
    createAccount,
    loginUser,
    fetchProfile,
    updateProfile,
    updateUser,
    onFileChange,
    profileImagePreview,
    uploadProfileImage,
  };
});
