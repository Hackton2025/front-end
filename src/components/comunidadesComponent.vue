<script setup>
</script>

<template>
      <div class="comunidades">
        <h3>Minhas Comunidades:</h3>
        <ul>

          <li><img src="/public/img/direcao-g.png" alt="D-geral"> <p>Direção-Geral</p> </li>

          <li> <img src="/public/img/cecom.png" alt="cecom"> <p>CECOM</p> </li>

          <li> <img src="/public/img/agropecuaria.png" alt="agro"> <p>Agropecuária</p> </li>

          <li> <img src="/public/img/informatica.png" alt="info"> <p>Informática</p> </li>

          <li> <img src="/public/img/quimica.png" alt="quimi"> <p>Quimica</p> </li>

          <li> <img src="/public/img/nupe.png" alt="nupe"> <p>NUPE</p> </li>

        </ul>
      </div>
</template>

<style scoped>
.comunidades{
  margin: 2vw 0 0 6vw;
}
h3 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 1.5vw;
}
li {
  display: flex;
  padding: 10px;
}
p {
  display: flex;
  align-items: center;
  margin: 10px;
}
img {
  width: 3vw;
  height: 3vw;
  border-radius: 15%;
  padding: 4.5px;
  background-color: #2F9E41;
 }
</style>