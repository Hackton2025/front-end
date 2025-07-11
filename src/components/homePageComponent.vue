<script setup>
</script>

<template>
  <main>
 <div>
    <section class="topo">
      <img src="/public/img/logo.horizontal.ifc-Photoroom.png" alt="logo ifc" class="logo" />
      <div class="input-area">
        <div class="input-wrapper">
          <span class="mdi mdi-magnify search-icon"></span>
          <input type="text"/>
        </div>
        <div class="icons">
        <span class="mdi mdi-home"></span>
        <span class="mdi mdi-circle-outline"></span>
        <span class="mdi mdi-cog"></span>
        </div>      
      </div>
    </section>
  </div>
  <div class="left">
    <div class="profile">

    </div>
    <div class="">

    </div>
  </div>
  </main>

</template>
<style scoped>
main {
  background-color: #E1E1E1;
}
.logo {
  width: 16%;
  margin: 0.2vw 20vw 2vw 1vw;
  
}

.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vh 4vw;
}


.input-area {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
}


.input-wrapper {
  position: relative;
  width: 35%;
  margin-right: 15%;
  
}

input {
  width: 120%;
  padding: 10px 10px 10px 18px; 
  border: none;
  border-radius: 30px;
  background-color: #2da34a;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
}


.search-icon {
  position: absolute;
  top: 50%;
  left: 20.6vw;
  transform: translateY(-50%);
  font-size: 20px;
  color: white;
  
}


span.mdi {
  font-size: 35px;
  color: #2c3e50;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
}


.icons {
  display: flex;
  margin-left: auto;
}
.input-wrapper span {
  color: white;
}
</style>