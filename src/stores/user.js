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
    first_profile_image_url: null,
    secondProfileImage: null,
  });

  const confirmPassword = ref("");
  const token = ref(localStorage.getItem("token") || null);
  const profileImagePreview = ref(null);

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
      router.push("/");
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

      usuario.value.email = data.user.email;
      usuario.value.fullname = data.user.fullname;
      usuario.value.name = data.user.name;
      usuario.value.phone = data.user.phone;
      usuario.value.birthday = data.user.birthday;
      usuario.value.accept_notification = data.user.accept_notification;
      usuario.value.is_master = data.user.is_master;
      usuario.value.uuid = data.user.uuid;

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

  async function fetchProfile() {
    try {
      const response = await api.get("/profile/", {
        headers: { Authorization: `Bearer ${token.value}` },
      });

      if (response.data.length > 0) {
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
      profile.value.first_profile_image_url = file;
    }
  }

  async function uploadProfileImage() {
    const formData = new FormData();
    formData.append("file", profile.value.first_profile_image_url);

    try {
      const response = await api.post("/image-uploader/", formData, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Imagem de perfil enviada:", response.data);

      profile.value.firstProfileImage = response.data.uuid || response.data.attachment_key;

      return response.data.uuid || response.data.attachment_key;

    } catch (error) {
      console.error("Erro ao enviar imagem de perfil:", error);
      alert("Erro ao enviar imagem de perfil. Tente novamente.");
      return null;
    }
  }

  async function updateProfile() {
    try {
      let imageUrl = null

      if (profile.value.first_profile_image_url instanceof File) {
        imageUrl = await uploadProfileImage()
      }

      const updates = {
        links1: profile.value.links1,
        links2: profile.value.links2,
      }

      if (profile.value.firstProfileImage) {
        updates.firstProfileImage = profile.value.firstProfileImage;
      }

      const response = await api.patch(
        `/profile/${profile.value.uuid}/`,
        updates,
        { headers: { Authorization: `Bearer ${token.value}` } }
      )

      Object.assign(profile.value, response.data)
      alert('Perfil atualizado!')

      profile.value.first_profile_image_url = null
      profileImagePreview.value = null
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error)
      alert('Erro ao atualizar perfil.')
    }
  }

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
