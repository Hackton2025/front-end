<script setup>
</script>



<template>
    <section class="card-ifc">
      <div class="card-top"></div>
      <div class="card-content">
        <img src="/public/img/Logo_IFC_vertical_araquari.png" alt="Logo IFC" class="card-logo" />
        <h3 class="campus">Araquari</h3>
        <p class="arroba">@Araquari</p>
        <p class="descricao">Instituto Federal Catarinense<br>Campus Araquari</p>

        <button class="btn-ver">Ver perfil</button>
      </div>
    </section>
</template>

<style scoped>
.card-ifc {
  width: 280px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 3vw 0vw 2vw;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  font-family: sans-serif;
}
.card-top {
  background: linear-gradient(#2c9c49, #2c9c49);
  height: 70px;
}
.card-logo {
  width: 70px;
  height: auto;
  margin-top: -35px;
  border: 3px solid black;
  border-radius: 8px;
  background: white;
}

.campus {
  margin: 6px 0 0;
}
.arroba {
  font-size: 12px;
  color: gray;
  margin: 0;
  padding: 10px;
}
.descricao {
  font-size: 13px;
  margin: 4px 0 12px;
  color: #333;
  padding: 6px;
}
.btn-ver {
  background: #2c9c49;
  color: white;
  border: none;
  padding: 8px 100px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
}
.btn-ver:hover {
  background: #267e3b;
}
</style>
