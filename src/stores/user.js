import { ref } from "vue";
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
    is_institute: false,
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
  const usersFetched = ref([]);

  function resetStore() {
    usuario.value = {
      uuid: null,
      email: "",
      fullname: "",
      name: "",
      phone: "",
      birthday: "",
      password: "",
      accept_notification: false,
      is_master: false,
      is_institute: false,
    };

    profile.value = {
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
    };

    confirmPassword.value = "";
    profileImagePreview.value = null;
    usersFetched.value = [];
  }

async function createAccount() {
  if (usuario.value.password !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    const { data } = await api.post("/users/", {
      email: usuario.value.email,
      fullname: usuario.value.fullname,
      name: usuario.value.name,
      password: usuario.value.password,
      phone: usuario.value.phone,
      birthday: usuario.value.birthday,
      accept_notification: usuario.value.accept_notification,
      is_master: usuario.value.is_master,
      is_institute: usuario.value.is_institute,
    });

    usuario.value = data;

    alert("Conta criada com sucesso!");

    router.push(`/usuario/${data.uuid}`);

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
      resetStore();

      const { data } = await api.post("/users/login/", {
        email: usuarioLogin.email,
        password: usuarioLogin.password,
      });

      token.value = data.access;
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);

      Object.assign(usuario.value, data.user);

      if (data.user.profile) {
        Object.assign(profile.value, data.user.profile);

        if (profile.value.first_profile_image_url) {
          profile.value.first_profile_image_url =
            `${profile.value.first_profile_image_url}?t=${Date.now()}`;
        }
      }

      alert("Login bem-sucedido!");
      router.push("/home");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    resetStore();
    token.value = null;
    router.push("/");
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
        headers: { "Content-Type": "multipart/form-data" },
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

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar perfil.");
    }
  }

  async function updateUser(updates) {
    try {
      const response = await api.patch(
        `/users/${usuario.value.uuid}/`,
        updates
      );
      Object.assign(usuario.value, response.data);
    } catch (error) {
      alert("Erro ao atualizar usuário. Verifique os dados e tente novamente.");
    }
  }

  async function fetchUsers() {
    try {
      const response = await api.get("/users/");
      usersFetched.value = response.data;
    } catch (error) {
      alert("Erro ao buscar usuários.");
      console.error(error);
    }
  }

  // Buscar usuário pelo UUID
  async function fetchUserByUuid(uuid) {
    try {
      const response = await api.get(`/users/${uuid}/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error;
    }
  }

  return {
    usuario,
    confirmPassword,
    token,
    profile,
    createAccount,
    loginUser,
    updateProfile,
    updateUser,
    onFileChange,
    profileImagePreview,
    uploadProfileImage,
    usersFetched,
    fetchUsers,
    fetchUserByUuid, 
    logout,
    resetStore,
  };
});
