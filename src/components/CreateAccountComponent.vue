<template>
  <main>
    <div id="dados-do-usuario">
      <img src="/img/Logo_IFC_horizontal_Araquari.png" alt="LogoIFC" class="logotype" />

      <form @submit.prevent="createAccount">
        <div id="email-password">
          <p><input v-model="usuario.email" type="email" placeholder="E-Mail" /></p>
          <p><input v-model="usuario.fullname" type="text" placeholder="Nome Completo" /></p>
          <p><input v-model="usuario.name" type="text" placeholder="Nome de usuário" /></p>
          <p><input v-model="usuario.phone" type="text" placeholder="Telefone" /></p>
          <p><input v-model="usuario.birthday" type="date" style="color: gray;" /></p>
          <p><input v-model="usuario.password" type="password" placeholder="Senha" /></p>
          <p><input v-model="confirmPassword" type="password" placeholder="Confirme a Senha" /></p>
        </div>

        <div id="apple-google">
          <p><button type="button" id="google"><span class="mdi mdi-google" style="color: #000; margin-right: 1vw;"></span> Cadastre-se com o Google</button></p>
          <p><button type="button" id="apple"><span class="mdi mdi-apple" style="color: #000; margin-right: 1vw;"></span> Cadastre-se com a Apple</button></p>
        </div>

        <div id="cadastre-se">
          <p><button type="submit" id="cadastro">Cadastre-se</button></p>
        </div>
      </form>

      <p id="create-account"><router-link to="/">Já tem uma conta?</router-link></p>
      <p id="copyright">2025 &copy; Todos direitos reservados</p>
    </div>

    <div id="imagem-lateral">
      <img class="img-lateral" src="/img/image-Photoroom 1.png" alt="LogoIfc" />
    </div>
  </main>
</template>

<script setup>

import { ref, reactive } from 'vue';
import api from '@/plugins/axios';

console.log('api', api);

const usuario = reactive({
  email: '',
  fullname: '',
  name: '',
  phone: '',
  birthday: '',
  password: '',
  accept_notification: false,
  is_master: false,
});

console.log(usuario)
const confirmPassword = ref('');

async function createAccount() {
  if (usuario.password !== confirmPassword.value) {
    alert('As senhas não coincidem!');
    return;
  }

  try {
    const response = await api.post('/users/', usuario);
    console.log('Usuário cadastrado:', response.data);
    alert('Conta criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    alert('Erro ao criar conta. Tente novamente.');
  }
}
</script>

<style scoped>
main {
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/img/Rectangle 66.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#dados-do-usuario {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  height: 80vh;
  margin-right: 5vw;
  border-radius: 15px;
  padding: 0 2vw;
}

#dados-do-usuario img {
  width: 50%;
  margin: 1vw auto 0;
  text-align: center;
}

form {
  height: 100%;
  margin-top: 5%;
}

form p {
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

form input {
  width: 85%;
  height: 2.2rem;
  padding: 10px;
  border: none;
  background-color: #d3d3d360;
  border-radius: 10px;
  color: gray;
}

form input:focus {
  outline: none;
  border: 1px solid #2f9e41;
  width: 80%;
  transition: 0.5s;
}

form button {
  width: 85%;
  background-color: #d3d3d360;
  height: 2.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

form button:hover {
  width: 80%;
  background-color: #d3d3d3;
  transition: 0.5s;
}

#cadastro {
  background-color: #2f9e41;
  color: white;
  font-weight: bold;
  margin-top: 2.5vw;
  font-size: 1.3rem;
  height: 2.5rem;
}

#apple-google {
  padding-top: 7.5%;
  border-top: 1px solid black;
}

#create-account {
  text-align: center;
}

#imagem-lateral img {
  width: 90%;
  margin-left: 5vw;
  height: 80vh;
}

@media (max-width: 768px) {
  #imagem-lateral img {
    display: none;
  }
  main {
    padding: 4vw;
  }
  #dados-do-usuario {
    width: 100%;
    margin: 0;
    height: auto;
  }
  #dados-do-usuario img {
    display: none;
  }
  form input, form button {
    width: 85%;
    height: 2rem;
  }
}
</style>
