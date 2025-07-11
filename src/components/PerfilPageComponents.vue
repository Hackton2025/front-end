<script setup></script>

<template>
  <main>
    <div class="fundo">
      <img src="/img/Ellipse 2.png" alt="">

      <div class="card">
        <div class="conteudo">
        <h2>GustavoLopes</h2>
        <p class="username">@surikkto</p>

        <ul>
          <li>
            <span> 24 </span><br />
            seguidores
          </li>
          <li>
            <span> 69 </span><br />
            seguindo
          </li>
        </ul>

        <p><button class="editar">Editar perfil</button></p>

        <div class="biografia">
          <p>
          -Suricato <br>
          -Amigo do Maia  <br>
          -Flamengo no coração❤❤ <br>
          -Joinville - 17y️
          </p>
        </div>
      </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.fundo {

    background: linear-gradient(to bottom, #2F9E41 50%, #E1E1E1 50%);
  position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 10%;


}

img {
  position: absolute;
  width: 17%;
  max-width: 25vw;
  height: auto;
  top: 4%;
  left: 50%;
  z-index: 2;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.card {


  margin: auto;
  background-color: white;
  text-align: center;
  width: 90%;
  max-width: 600px;


  overflow: hidden;
  border-radius: 12px;
  position: relative;
  z-index: 1;

}

.conteudo {
  padding: 8vh 5vw;
}

.card h2 {
  font-weight: bold;
  color: black;
  font-size: 1.8rem;
}

.card p.username {
  color: gray;
}

.card ul {
  display: flex;
  justify-content: center;
  margin: 1vw 2vw 1vw 2vw;
}

.card ul li {
  color: gray;
  margin: auto;
  font-size: 1.3rem;
}

.card ul li span {
  color: black;
  font-weight: bold;
}

.editar {
  background-color: white;
  border: solid 2px #075200;
  border-radius: 12px;
  font-size: 1rem;
  width: 60%;
  max-width: 100px;
  min-width: 120px;
  color: #075200;
  margin-top: 5%;
  margin-bottom: 5%;
}

.biografia {

background-color: rgba(211, 211, 211, 0.2);
  border-radius: 12px;
  padding: 20px 5px 20px 5px;
  text-align: center;
}

.biografia p {
 color: black;
 text-align: left;
}


</style>
