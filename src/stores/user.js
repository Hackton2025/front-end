import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  const usuario = ref({
    uuid: null,
    email: "",
    fullname: "",
    name: "",
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
    second_profile_image_url: null,
    image_test: null,
    firstProfileImage: null,
    firstProfileImageFile: null,
    legend: "",
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

      alert("Conta criada com sucesso!");
      router.push("/");
    } catch (error) {
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
      router.push("/home");
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    }
  }

  async function fetchProfile() {
    try {
      const response = await api.get("/profile/");
      if (response.data.length > 0) {
        Object.assign(profile.value, response.data[response.data.length - 1]);
      }
    } catch (error) {
      // Erro ignorado intencionalmente
    }
  }

  function onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      profileImagePreview.value = URL.createObjectURL(file);
      profile.value.firstProfileImageFile = file;
    }
  }

  async function uploadProfileImage() {
    if (!profile.value.firstProfileImageFile) {
      return null;
    }

    const formData = new FormData();
    formData.append("file", profile.value.firstProfileImageFile);

    try {
      const response = await api.post("/image-uploader/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.attachment_key;
    } catch (error) {
      alert("Erro ao enviar imagem de perfil. Tente novamente.");
      return null;
    }
  }

  async function updateProfile() {
    try {
      let imageKey = null;

      if (profile.value.firstProfileImageFile) {
        imageKey = await uploadProfileImage();
      }

      const updates = {
        links1: profile.value.links1,
        links2: profile.value.links2,
        legend: profile.value.legend,
      };

      if (imageKey) {
        updates.firstProfileImage = imageKey;
      }

      const response = await api.patch(
        `/profile/${profile.value.uuid}/`,
        updates
      );

      Object.assign(profile.value, response.data);

      profile.value.firstProfileImageFile = null;
      profileImagePreview.value = null;
    } catch (error) {
      // alert("Erro ao atualizar perfil.");
    }
  }

  async function updateUser(updates) {
    try {
      const response = await api.patch(
        `/users/${usuario.value.uuid}/`,
        updates
      );

      Object.assign(usuario.value, response.data);
      // alert("Usuário atualizado com sucesso!");
    } catch (error) {
      // alert("Erro ao atualizar usuário. Verifique os dados e tente novamente.");
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
