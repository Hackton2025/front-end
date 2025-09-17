<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<template>
  <main>
    <div id="dados-do-usuario">
      <img src="/img/Logo_IFC_horizontal_Araquari.png" alt="LogoIFC" class="logotype" />

      <form @submit.prevent="userStore.createAccount">
        <div id="email-password">
          <p><input v-model="userStore.usuario.email" type="email" placeholder="E-Mail" /></p>
          <p><input v-model="userStore.usuario.fullname" type="text" placeholder="Nome Completo" /></p>
          <p><input v-model="userStore.usuario.name" type="text" placeholder="Nome de usuário" /></p>
          <p><input v-model="userStore.usuario.phone" type="text" placeholder="Telefone" /></p>
          <p><input v-model="userStore.usuario.birthday" type="date" style="color: gray;" /></p>
          <p><input v-model="userStore.usuario.password" type="password" placeholder="Senha" /></p>
          <p><input v-model="userStore.confirmPassword" type="password" placeholder="Confirme a Senha" /></p>
        </div>

        <div id="instituto-checkbox">
          <label>
            <input type="checkbox" v-model="userStore.usuario.is_institute" /> Instituto
          </label>
        </div>

        <div id="cadastre-se">
          <p><button type="submit" id="cadastro">Cadastre-se</button></p>
        </div>
      </form>

      <p id="create-account"><router-link to="/">Já tem uma conta?</router-link></p>
      <p @click="userStore.usuario.is_institute = true" id="copyright">2025 &copy; Todos direitos reservados</p>
    </div>

    <div id="imagem-lateral">
      <img class="img-lateral" src="/img/image-Photoroom 1.png" alt="LogoIfc" />
    </div>
  </main>
</template>

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

#email-password p {
  padding: 0.3vw;
}

#email-password {
  margin-bottom: 3vw;
}

#email-password input {
  font-size: 1rem;
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
  transition: all 0.5s ease;
}

#dados-do-usuario img {
  width: 50%;
  margin: 1vw auto 0;
  text-align: center;
  transition: all 0.5s ease;
}

form {
  height: 100%;
  margin-top: 5%;
  transition: all 0.5s ease;
}

form p {
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  transition: all 0.5s ease;
}

form input {
  width: 85%;
  height: 2.2rem;
  padding: 10px;
  border: none;
  background-color: #d3d3d360;
  border-radius: 10px;
  color: gray;
  transition: all 0.8s ease;
}

form input:focus {
  outline: none;
  border: 1px solid #2f9e41;
  width: 80%;
}

form button {
  width: 85%;
  background-color: #d3d3d360;
  height: 2.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.8s ease;
}

form button:hover {
  width: 80%;
  background-color: #d3d3d3;
}

#cadastro {
  background-color: #2f9e41;
  color: white;
  font-weight: bold;
  margin-top: 2.5vw;
  font-size: 1.3rem;
  height: 2.5rem;
  transition: all 0.8s ease;
}

#cadastro:hover {
  background-color: #1d6328;
}

#create-account {
  text-align: center;
  transition: all 0.5s ease;
}

#imagem-lateral img {
  width: 68%;
  margin-left: 8vw;
  height: 68%;
  transition: all 0.8s ease;
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
  form input,
  form button {
    width: 85%;
    height: 2rem;
  }
}

#copyright {
  margin: 1vw;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #a8a8a8;
  transition: all 0.5s ease;
}
</style>
