<script setup>

</script>

<template>
     <section class="topo">
      <img src="/public/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />
      
      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </div>

      <div class="icons">
        <span class="mdi mdi-bell"></span>
        <span class="mdi mdi-circle-outline"></span>
        <span class="mdi mdi-cog" @click="mostrarConfig = true"></span>
      </div>
    </section>
</template>

<style scoped>
.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vh 4vw;
  gap: 20px;
}

.logo {
  width: 16%;
}

.input-area {
  flex: 1;
  display: flex;
  justify-content: center;
}

.input-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
}

input {
  width: 100%;
  padding: 10px 15px 10px 35px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  pointer-events: none;
}

.icons {
  display: flex;
  gap: 10px;
}

span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  padding: 5px;
}

</style>