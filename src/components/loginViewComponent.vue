<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';

const usuarioLogin = reactive({
  email: "",
  password: "",
});

const userStore = useUserStore();
</script>

<template>
  <main>
    <div id="dados-do-usuario">
      <img src="/img/Logo_IFC_horizontal_Araquari.png" alt="LogoIFC" class="logotype" />

      <form @submit.prevent="userStore.loginUser({...usuarioLogin})">
        <div id="email-password">
          <p>
            <input v-model="usuarioLogin.email" type="email" placeholder="E-Mail" />
          </p>
          <p>
            <input v-model="usuarioLogin.password" type="password" placeholder="Senha" />
          </p>
        </div>

        <div id="apple-google" style="display: none;">
          <p>
            <button id="google"><span id="google" style="color: #000; margin: 0 1vw 0 0;"
                class="mdi mdi-google"></span>Entrar com o Google</button>
          </p>
          <p>
            <button id="apple"><span id="apple" style="color: #000; margin: 0 1vw 0 0;" class="mdi mdi-apple"></span>
              Entrar com a Apple</button>
          </p>
        </div>

        <div id="cadastre-se">
          <p><button type="submit" id="cadastro">Entrar</button></p>
        </div>
      </form>
      <p id="create-account"><router-link to="/nova-conta">Criar uma conta</router-link> </p>
      <p id="copyright">2025 &copy; Todos direitos reservados</p>
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
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/Rectangle 66.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#email-password p {
  padding: 0.3rem;
}

#email-password {
  margin-bottom: 3vw;
}

#email-password input {
  font-size: 1rem;
}

main div#dados-do-usuario {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  height: 70vh;
  margin-right: 5vw;
  border-radius: 15px;
  padding: 0 2vw;
}

main div#dados-do-usuario img {
  width: 50%;
  margin: 2vw auto 0 auto;
  text-align: center;
  transition: all 0.5s ease;
}

main div#dados-do-usuario form {
  height: 100%;
  margin-top: 10%;
}

main div#dados-do-usuario form p {
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

main div#dados-do-usuario form p input {
  width: 85%;
  margin: 0 auto;
  height: 1.8vw;
  padding: 10px;
  border: none;
  background-color: #D3D3D360;
  border-radius: 10px;
  transition: all 0.3s ease;
}

main div#dados-do-usuario form p input:focus {
  outline: none;
  border: 1px solid #2F9E41;
  width: 80%;
}

main div#dados-do-usuario form p input:hover {
  background-color: #c9c9c9;
}

main div#dados-do-usuario form p button {
  width: 85%;
  background-color: #D3D3D360;
  height: 1.8vw;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

main div#dados-do-usuario form p button:hover {
  width: 80%;
  background-color: #bfbfbf;
}

main div#dados-do-usuario form p button#cadastro {
  background-color: #2F9E41;
  color: white;
  font-weight: bold;
  margin-top: 5vw;
  font-size: 1.3rem;
  height: 2.5vw;
  transition: all 1s ease;
}

main div#dados-do-usuario form p button#cadastro:hover {
  background-color: #1d6328;
}

main div#dados-do-usuario form #email-password {
  padding-bottom: 7.5%;
}

main div#dados-do-usuario form div#apple-google {
  padding-top: 7.5%;
  border-top: black 1px solid;
}

main div#dados-do-usuario p#copyright {
  text-align: center;
  font-size: 0.8rem;
  margin: 1vw;
  font-weight: bold;
  color: #a8a8a8;
}

#create-account {
  text-align: center;
}

main div#imagem-lateral img {
  width: 68%;
  height: 68%;
  margin-left: 8vw;
  transition: all 0.5s ease;
}

main div#imagem-lateral img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

@media (max-width: 768px) {
  main div#imagem-lateral img {
    display: none;
  }

  main {
    padding: 4vw;
  }

  main div#dados-do-usuario {
    width: 100%;
    margin: 0;
  }

  main div#dados-do-usuario img {
    width: 80%;
  }

  main div#dados-do-usuario form div#email-password input {
    width: 85%;
    height: 2rem;
  }

  main div#dados-do-usuario form div button {
    width: 85%;
    height: 2rem;
  }

  main div#dados-do-usuario form div button#cadastro {
    width: 85%;
    height: 2rem;
  }
}

</style>

