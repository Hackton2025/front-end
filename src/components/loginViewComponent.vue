
  <template>
    <main>
      <div id="dados-do-usuario">
        <img src="/img/Logo_IFC_horizontal_Araquari.png" alt="LogoIFC" class="logotype" />

        <form @submit.prevent="loginUser">
          <div id="email-password">
            <p>
              <input v-model="usuario.email" type="email" placeholder="E-Mail" />
            </p>
            <p>
              <input v-model="usuario.password" type="password" placeholder="Senha" />
            </p>
          </div>

          <div id="apple-google">
            <p>
              <button id="google"><span id="google" style="color: #000; margin: 0 1vw 0 0;" class="mdi mdi-google"></span>Entrar com o Google</button>
            </p>
            <p>
              <button id="apple"><span id="apple" style="color: #000; margin: 0 1vw 0 0;" class="mdi mdi-apple"></span> Entrar com a Apple</button>
            </p>
          </div>

          <div id="cadastre-se"><p><button type="submit" id="cadastro">Entrar</button></p></div>
        </form>
        <p id="create-account"><router-link to="/nova-conta">Criar uma conta</router-link> </p>
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

    const usuario = reactive({
      email: '',
      password: '',
    });

    async function loginUser() {
      try {
        const response = await api.post('/users/login/', {
          email: usuario.email,
          password: usuario.password,
        });
        console.log('Login bem-sucedido:', response.data);
        alert('Login bem-sucedido!');
        window.location.href = '/home';
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      }
    }
  </script>

  <style scoped>
    main{
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

    main div#dados-do-usuario{
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 35%;
      height: 70vh;
      margin-right: 5vw; ;
      border-radius: 15px;
      padding: 0 2vw;


      & img{
        width: 50%;
        margin: 0 auto 0 auto;
        margin-top: 2vw;
        text-align: center;
        
      }
      & form{
        /* width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%; */
        height: 100%;
        margin-top: 10%;
        

        & p{ 
          text-align: center;
          margin: 0 0 10px 0;
          font-size: 1.5rem;
        
        & input{
            width: 85%;
            margin: 0 auto;
            height: 1.8vw;
            padding: 10px;
            border: none;
            background-color: #D3D3D360;
            border-radius: 10px;
        }
        & input:focus{
          outline: none;
          border: 1px solid #2F9E41;
          width: 80%;

          transition: 0.5s;
          height: 1.8vw;
        }
        & button{
          width: 85%;
          background-color: #D3D3D360;
          height: 1.8vw;
          border-radius:10px ;
          border: none;
          cursor: pointer;
          
          &:hover{
            width: 80%;
            background-color: #D3D3D3;

          transition: 0.5s;
          height: 1.8vw;

          }
          &#cadastro{
            background-color: #2F9E41;
            color: white;
            font-weight: bold;
            margin-top: 5vw;
            font-size: 1.3rem;
            height: 2.5vw;
          }
        }
      }
      & #email-password{
        padding-bottom: 7.5%;
      }
      & div#apple-google{
        padding-top: 7.5%;
        border-top: black 1px solid;
        
      }
      }
      & p#copyright{
        text-align: center;
        font-size: 0.8rem;
        margin: 10px;
        font-weight: bold;
        color: #a8a8a8;
      }
    }

    #google{
      font-size: 1rem;
    }
    #apple{
      font-size: 1rem;
    }
    #create-account{
      text-align: center;
    }

    main div#imagem-lateral img{
      width: 90%;
      height: 80vh;
      margin-left: 5vw;
      /*filter: drop-shadow(2px 2px 2px #2F9E41);*/
    }


    @media (max-width: 768px){
      main div#imagem-lateral img{
        display: none;
      }
      main{
        padding: 4vw;
      }
      main div#dados-do-usuario{
        width: 100%;
        margin: 0;

        & img{
          width: 80%;
        }

        & form{
          height: 100%;
          
          & div#email-password input{
            width: 85%;
            height: 2rem;
            &:first-child{
              margin-bottom: 1.5vw;
            }
          }
          & div button{
            width: 85%;
            height: 2rem;

            &:first-child{
              margin-bottom: 1.5vw;
            }
          }
          & div button#cadastro{
            width: 85%;
            height: 2rem;
          }
        }
      }
    }

    /* @media (min-width: 1024px) and (max-width: 1920px) */

  </style>
