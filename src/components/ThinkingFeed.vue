<template>
  <div class="main">
    <div class="profile"></div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="O que você está pensando?">
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 80px;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr; 
  align-items: center; 
  gap: 10px;
  padding: 0 15px; 
  box-sizing: border-box;
}

.profile {
  border: solid 1px black;
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.input-wrapper {
  width: 100%;
  height: 50px;
  background-color: #F0F2F5;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.input {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-size: 14px;
}

.input:focus {
  outline: none;
}
</style>
